const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
}

const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../public/assets/images');
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function processDirectory(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        const webpPath = fullPath.replace(ext, '.webp');
        
        // Skip if webp already exists and is newer
        if (fs.existsSync(webpPath)) {
            const webpStat = fs.statSync(webpPath);
            if (webpStat.mtimeMs > stat.mtimeMs) {
                // console.log(`Skipping ${item} (already optimized)`);
                continue;
            }
        }

        console.log(`Optimizing: ${item}`);
        
        try {
          const info = await sharp(fullPath)
            .webp({ quality: 80 }) // Good balance for web
            .toFile(webpPath);
            
          const originalSize = stat.size;
          const newSize = info.size;
          const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
          
          console.log(`  ✅ Converted to WebP`);
          console.log(`  Original: ${formatBytes(originalSize)} | New: ${formatBytes(newSize)} | Savings: ${savings}%`);
          
          // Optional: Rename original to .bak or delete?
          // For safety, we keep both for now, but in a real CI/CD pipeline we'd replace usage.
        } catch (err) {
          console.error(`  ❌ Error converting ${item}:`, err.message);
        }
      }
    }
  }
}

console.log(`Starting image optimization in: ${ASSETS_DIR}`);
processDirectory(ASSETS_DIR).then(() => {
  console.log('\n✨ Optimization complete!');
  console.log('To see build size reduction, update your code to reference the .webp files and delete the original .png/.jpg files.');
});
