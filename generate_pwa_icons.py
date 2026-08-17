import zlib
import struct
import math
import os

def create_png(width, height, get_pixel):
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png.extend(struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc))
    
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # Filter type 0
        for x in range(width):
            r, g, b, a = get_pixel(x, y, width, height)
            raw_data.extend([int(r), int(g), int(b), int(a)])
            
    compressed = zlib.compress(raw_data, 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png.extend(struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc))
    
    iend_crc = zlib.crc32(b'IEND')
    png.extend(struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc))
    
    return bytes(png)

def draw_icon(x, y, width, height, is_maskable=False):
    # Normalized coordinates (-1.0 to 1.0)
    cx = (x / (width - 1)) * 2.0 - 1.0
    cy = (y / (height - 1)) * 2.0 - 1.0
    
    # Background color: #0f172a (15, 23, 42)
    bg_r, bg_g, bg_b = 15, 23, 42
    
    # Center distance
    dist = math.sqrt(cx*cx + cy*cy)
    
    # Subtle central glow (gold/amber glow)
    glow = max(0.0, 1.0 - dist * 1.1)
    glow_pow = glow ** 2
    r = bg_r + glow_pow * 45
    g = bg_g + glow_pow * 35
    b = bg_b + glow_pow * 15
    
    # Outer rounded container for non-maskable icons
    if not is_maskable:
        # Rounded rect corner radius ~20%
        abs_x, abs_y = abs(cx), abs(cy)
        corner_r = 0.25
        if abs_x > (1.0 - corner_r) and abs_y > (1.0 - corner_r):
            cdist = math.sqrt((abs_x - (1.0 - corner_r))**2 + (abs_y - (1.0 - corner_r))**2)
            if cdist > corner_r:
                return (0, 0, 0, 0) # Transparent outside rounded corner
                
    # Symbol scaling
    # If maskable, scale symbol down to fit inside 60% safe zone circle
    scale = 0.58 if is_maskable else 0.85
    sx = cx / scale
    sy = cy / scale
    
    # 1. Radiant rays in background of symbol
    ray_dist = math.sqrt(sx*sx + (sy + 0.1)*(sy + 0.1))
    if ray_dist < 0.9:
        angle = math.atan2(sy + 0.1, sx)
        ray = (math.sin(angle * 8) + 1.0) * 0.5
        ray_intensity = max(0.0, (1.0 - ray_dist / 0.9)) * ray * 0.18
        r += ray_intensity * 251
        g += ray_intensity * 191
        b += ray_intensity * 36

    # 2. Open Bible / Book Base
    # Left page: curve from (-0.55, 0.15) to (0.0, 0.25) to (-0.55, 0.45)
    # Right page: curve from (0.0, 0.25) to (0.55, 0.15) to (0.55, 0.45)
    
    # Page vertical bounds
    book_top = 0.12 - 0.08 * (1.0 - abs(sx)**2)
    book_bottom = 0.48 - 0.08 * (1.0 - abs(sx)**2)
    
    if abs(sx) <= 0.55 and sy >= book_top and sy <= book_bottom:
        # Inside book area
        # Distance from spine (sx = 0)
        page_t = abs(sx) / 0.55
        # Gold page color with gradient
        page_r = 245 + page_t * 10
        page_g = 158 + page_t * 33
        page_b = 11 + page_t * 25
        
        # Page edge border
        if abs(sx) > 0.52 or sy < (book_top + 0.03) or sy > (book_bottom - 0.03):
            # Lighter gold border
            page_r, page_g, page_b = 254, 240, 138
            
        # Spine shadow
        if abs(sx) < 0.04:
            shadow = (0.04 - abs(sx)) / 0.04
            page_r -= shadow * 80
            page_g -= shadow * 60
            page_b -= shadow * 10
            
        r, g, b = page_r, page_g, page_b

    # 3. Golden Cross (Luminous)
    # Vertical beam: sx in [-0.08, 0.08], sy in [-0.55, 0.10]
    # Horizontal beam: sx in [-0.32, 0.32], sy in [-0.35, -0.21]
    
    in_vert = (abs(sx) <= 0.08) and (-0.55 <= sy <= 0.10)
    in_horiz = (abs(sx) <= 0.32) and (-0.35 <= sy <= -0.21)
    
    if in_vert or in_horiz:
        # Bright golden/white cross
        r, g, b = 255, 251, 235
        # Outer glow border on cross
        edge_x = min(abs(abs(sx) - 0.08), abs(abs(sx) - 0.32))
        if edge_x < 0.02:
            r, g, b = 251, 191, 36

    # Clamp colors to 0-255
    r = min(255, max(0, int(r)))
    g = min(255, max(0, int(g)))
    b = min(255, max(0, int(b)))
    
    return (r, g, b, 255)

os.makedirs('public/icons', exist_ok=True)

icons_config = [
    ('public/icons/icon-192.png', 192, 192, False),
    ('public/icons/icon-512.png', 512, 512, False),
    ('public/icons/icon-maskable-192.png', 192, 192, True),
    ('public/icons/icon-maskable-512.png', 512, 512, True),
    ('public/icons/apple-touch-icon.png', 180, 180, False),
]

for filepath, w, h, maskable in icons_config:
    png_bytes = create_png(w, h, lambda x, y, width, height: draw_icon(x, y, width, height, maskable))
    with open(filepath, 'wb') as f:
        f.write(png_bytes)
    print(f'Generated {filepath} ({w}x{h}, size: {len(png_bytes)} bytes)')

