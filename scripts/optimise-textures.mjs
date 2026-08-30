// Encode the generated textures to AVIF + WebP at web weight.
import sharp from 'sharp';
import fs from 'fs';

const dir = 'public/images/textures';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

for (const f of files) {
  const base = f.replace(/\.png$/, '');
  const src = `${dir}/${f}`;
  await sharp(src).avif({ quality: 44, effort: 6 }).toFile(`${dir}/${base}.avif`);
  await sharp(src).webp({ quality: 62, effort: 6 }).toFile(`${dir}/${base}.webp`);
  const a = fs.statSync(`${dir}/${base}.avif`).size;
  const w = fs.statSync(`${dir}/${base}.webp`).size;
  console.log(`${base}: png ${(fs.statSync(src).size/1024).toFixed(1)}KB -> avif ${(a/1024).toFixed(1)}KB, webp ${(w/1024).toFixed(1)}KB`);
}
