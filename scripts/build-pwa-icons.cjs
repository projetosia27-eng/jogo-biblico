const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

function renderIcon(width, height, isMaskable) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;

      // Normalized coordinates from -1.0 to 1.0
      const cx = (x / (width - 1)) * 2.0 - 1.0;
      const cy = (y / (height - 1)) * 2.0 - 1.0;

      const dist = Math.sqrt(cx * cx + cy * cy);

      // Rounded corners for non-maskable icons (~20% radius)
      if (!isMaskable) {
        const absX = Math.abs(cx);
        const absY = Math.abs(cy);
        const cornerR = 0.25;
        if (absX > 1.0 - cornerR && absY > 1.0 - cornerR) {
          const cdist = Math.sqrt(
            Math.pow(absX - (1.0 - cornerR), 2) + Math.pow(absY - (1.0 - cornerR), 2)
          );
          if (cdist > cornerR) {
            png.data[idx] = 0;
            png.data[idx + 1] = 0;
            png.data[idx + 2] = 0;
            png.data[idx + 3] = 0;
            continue;
          }
        }
      }

      // Background gradient: Dark Slate #0f172a to Indigo #1e1b4b
      const glow = Math.max(0, 1.0 - dist * 0.95);
      let r = 15 + glow * 25;
      let g = 23 + glow * 15;
      let b = 42 + glow * 35;

      // Scale factor: maskable icons keep symbol within 58% safe zone
      const scale = isMaskable ? 0.58 : 0.82;
      const sx = cx / scale;
      const sy = cy / scale;

      // 1. Light rays behind cross
      const rayDist = Math.sqrt(sx * sx + (sy + 0.15) * (sy + 0.15));
      if (rayDist < 0.95) {
        const angle = Math.atan2(sy + 0.15, sx);
        const rayPattern = (Math.sin(angle * 10) + 1.0) * 0.5;
        const rayIntensity = Math.max(0, 1.0 - rayDist / 0.95) * rayPattern * 0.22;
        r += rayIntensity * 251;
        g += rayIntensity * 191;
        b += rayIntensity * 36;
      }

      // 2. Open Book / Bible
      const bookTop = 0.12 - 0.08 * (1.0 - Math.pow(sx, 2));
      const bookBottom = 0.52 - 0.08 * (1.0 - Math.pow(sx, 2));

      if (Math.abs(sx) <= 0.58 && sy >= bookTop && sy <= bookBottom) {
        const pageT = Math.abs(sx) / 0.58;
        let pageR = 245 + pageT * 10;
        let pageG = 158 + pageT * 33;
        let pageB = 11 + pageT * 25;

        if (Math.abs(sx) > 0.54 || sy < bookTop + 0.03 || sy > bookBottom - 0.03) {
          pageR = 254;
          pageG = 240;
          pageB = 138;
        }

        if (Math.abs(sx) < 0.05) {
          const shadow = (0.05 - Math.abs(sx)) / 0.05;
          pageR -= shadow * 90;
          pageG -= shadow * 70;
          pageB -= shadow * 20;
        }

        r = pageR;
        g = pageG;
        b = pageB;
      }

      // 3. Golden Cross
      const inVertBeam = Math.abs(sx) <= 0.09 && sy >= -0.62 && sy <= 0.12;
      const inHorizBeam = Math.abs(sx) <= 0.35 && sy >= -0.42 && sy <= -0.26;

      if (inVertBeam || inHorizBeam) {
        r = 255;
        g = 251;
        b = 235;

        const edgeDistX = Math.min(Math.abs(Math.abs(sx) - 0.09), Math.abs(Math.abs(sx) - 0.35));
        if (edgeDistX < 0.02) {
          r = 251;
          g = 191;
          b = 36;
        }
      }

      png.data[idx] = Math.min(255, Math.max(0, Math.round(r)));
      png.data[idx + 1] = Math.min(255, Math.max(0, Math.round(g)));
      png.data[idx + 2] = Math.min(255, Math.max(0, Math.round(b)));
      png.data[idx + 3] = 255;
    }
  }

  return PNG.sync.write(png);
}

const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const icons = [
  { name: 'icon-192.png', width: 192, height: 192, maskable: false },
  { name: 'icon-512.png', width: 512, height: 512, maskable: false },
  { name: 'icon-maskable-192.png', width: 192, height: 192, maskable: true },
  { name: 'icon-maskable-512.png', width: 512, height: 512, maskable: true },
  { name: 'apple-touch-icon.png', width: 180, height: 180, maskable: false }
];

icons.forEach(({ name, width, height, maskable }) => {
  const buf = renderIcon(width, height, maskable);
  const filePath = path.join(iconsDir, name);
  fs.writeFileSync(filePath, buf);
  console.log(`Generated ${name} (${width}x${height}, ${buf.length} bytes)`);
});
