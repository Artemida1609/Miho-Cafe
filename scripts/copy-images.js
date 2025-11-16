import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../../photos');
const destDir = join(__dirname, '../public/photos');

// Check if source directory exists
if (!existsSync(sourceDir)) {
  console.log('ℹ Source photos directory not found. Images should already be in public/photos/');
  process.exit(0);
}

function copyRecursive(src, dest) {
  try {
    mkdirSync(dest, { recursive: true });
    const entries = readdirSync(src);
    let copiedCount = 0;

    for (const entry of entries) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      const stat = statSync(srcPath);

      if (stat.isDirectory()) {
        const subCopied = copyRecursive(srcPath, destPath);
        copiedCount += subCopied;
      } else {
        copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    }
    return copiedCount;
  } catch (error) {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }
}

try {
  const count = copyRecursive(sourceDir, destDir);
  if (count > 0) {
    console.log(`✓ Copied ${count} image(s) to public folder`);
  } else {
    console.log('ℹ No images to copy (images may already be in public/photos/)');
  }
} catch (error) {
  // If source directory doesn't exist, that's okay - images might already be in public
  if (error.code === 'ENOENT') {
    console.log('ℹ Source photos directory not found. Images should already be in public/photos/');
    process.exit(0);
  } else {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }
}

