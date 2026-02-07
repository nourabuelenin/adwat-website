const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../public/assets/images');
const BACKUP_DIR = path.join(__dirname, '../_backup_images');
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

function processDirectory(directory, relativePath = '') {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, path.join(relativePath, item));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        // Check if webp version exists
        const webpPath = fullPath.replace(ext, '.webp');
        if (fs.existsSync(webpPath)) {
          // Move original to backup
          const backupSubDir = path.join(BACKUP_DIR, relativePath);
          if (!fs.existsSync(backupSubDir)) {
            fs.mkdirSync(backupSubDir, { recursive: true });
          }
          
          const backupPath = path.join(backupSubDir, item);
          fs.renameSync(fullPath, backupPath);
          console.log(`Moved to backup: ${path.join(relativePath, item)}`);
        } else {
            console.log(`Skipping (no webp found): ${path.join(relativePath, item)}`);
        }
      }
    }
  }
}

console.log(`Starting cleanup... Moving originals to ${BACKUP_DIR}`);
processDirectory(ASSETS_DIR);
console.log('Cleanup complete.');
