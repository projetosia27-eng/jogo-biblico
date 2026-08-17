import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const iconsDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

function generateIconPNG(size, isMaskable = false) {
  const png = new PNG({ width: size, height: size });

  // Color definitions (RGBA 0-255)
  // Background: Deep Indigo / Slate gradient (#0f172a to #1e1b4b)
  // Accent: Amber / Gold (#f59e0b, #fbbf24, #fef08a)

  const cx = size / 2;
  const cy = size / 2;
  const scale = isMaskable ? 0.8 : 0.95; // safe zone padding for maskable
  const radius = (size / 2) * scale;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Radial background gradient
      const normDist = Math.min(1, dist / (size * 0.7));
      const bgR = Math.round(15 + (30 - 15) * normDist);
      const bgG = Math.round(23 + (27 - 23) * normDist);
      const bgB = Math.round(42 + (75 - 42) * normDist);

      let r = bgR;
      let g = bgG;
      let b = bgB;
      let a = 255;

      // Rounded rect or circle background container if not maskable
      if (!isMaskable) {
        const cornerRadius = size * 0.22;
        const qx = Math.abs(dx) - (size / 2 - cornerRadius);
        const qy = Math.abs(dy) - (size / 2 - cornerRadius);
        const outsideDist = Math.sqrt(Math.max(0, qx) ** 2 + Math.max(0, qy) ** 2);

        if (qx > 0 && qy > 0 && outsideDist > cornerRadius) {
          r = 0;
          g = 0;
          b = 0;
          a = 0;
        }
      }

      if (a > 0) {
        // Draw Book & Cross Symbol in Center
        // Normalized coordinates in [-1, 1] relative to scale
        const nx = dx / (radius * 0.85);
        const ny = dy / (radius * 0.85);

        // Gold Cross in Center
        const inVerticalBeam = Math.abs(nx) < 0.16 && ny > -0.65 && ny < 0.55;
        const inHorizontalBeam = Math.abs(ny + 0.15) < 0.16 && nx > -0.45 && nx < 0.45;

        // Open Book Pages at bottom of cross
        const inBookLeft = nx > -0.65 && nx < -0.04 && ny > 0.15 && ny < 0.55 && (ny - 0.15) > (nx + 0.04) * 0.3;
        const inBookRight = nx > 0.04 && nx < 0.65 && ny > 0.15 && ny < 0.55 && (ny - 0.15) > (-nx + 0.04) * 0.3;

        // Golden Sunburst / Rays Ring
        const ringDist = Math.sqrt(nx * nx + ny * ny);
        const inRing = ringDist > 0.75 && ringDist < 0.88;

        if (inVerticalBeam || inHorizontalBeam) {
          // Gold Gradient (#fbbf24 -> #f59e0b)
          const goldNorm = (ny + 0.6) / 1.2;
          r = Math.round(254 - goldNorm * 20);
          g = Math.round(200 - goldNorm * 40);
          b = Math.round(50 - goldNorm * 20);
        } else if (inBookLeft || inBookRight) {
          // Warm Light Book Pages (#fef3c7)
          r = 254;
          g = 243;
          b = 199;
        } else if (inRing) {
          // Accent Ring (#d97706)
          const angle = Math.atan2(ny, nx);
          const ray = Math.sin(angle * 12);
          if (ray > -0.2) {
            r = 245;
            g = 158;
            b = 11;
          }
        }
      }

      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = a;
    }
  }

  const filename = isMaskable ? `icon-maskable-${size}.png` : (size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`);
  const filePath = path.join(iconsDir, filename);
  const buffer = PNG.sync.write(png);
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated ${filePath}`);
}

generateIconPNG(192, false);
generateIconPNG(512, false);
generateIconPNG(192, true);
generateIconPNG(512, true);
generateIconPNG(180, false);

// Generate SVG vector icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />

  <!-- Outer Ring -->
  <circle cx="256" cy="256" r="185" fill="none" stroke="#f59e0b" stroke-width="8" stroke-opacity="0.4" stroke-dasharray="16 10" />

  <!-- Open Book Base -->
  <path d="M 130 350 C 190 325, 240 340, 256 360 C 272 340, 322 325, 382 350 L 382 280 C 322 255, 272 270, 256 290 C 240 270, 190 255, 130 280 Z" fill="#fef3c7" opacity="0.95" />

  <!-- Central Cross -->
  <g filter="url(#glow)">
    <rect x="232" y="110" width="48" height="230" rx="8" fill="url(#goldGrad)" />
    <rect x="156" y="170" width="200" height="48" rx="8" fill="url(#goldGrad)" />
  </g>

  <!-- Sparkles -->
  <circle cx="120" cy="140" r="6" fill="#fde047" opacity="0.8" />
  <circle cx="390" cy="140" r="8" fill="#fde047" opacity="0.9" />
  <circle cx="380" cy="380" r="5" fill="#fde047" opacity="0.7" />
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent);
console.log('Generated public/icons/icon.svg');
