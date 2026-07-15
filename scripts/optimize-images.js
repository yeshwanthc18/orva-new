const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../public/images");

const SUPPORTED = [".jpg", ".jpeg", ".png", ".webp"];

async function optimize(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await optimize(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!SUPPORTED.includes(ext)) continue;

    const before = (stat.size / 1024).toFixed(1);

    try {
      if (ext === ".jpg" || ext === ".jpeg") {
        await sharp(fullPath)
          .jpeg({
            quality: 82,
            mozjpeg: true,
          })
          .toFile(fullPath + ".tmp");
      }

      if (ext === ".png") {
        await sharp(fullPath)
          .png({
            quality: 85,
            compressionLevel: 9,
            palette: true,
          })
          .toFile(fullPath + ".tmp");
      }

      if (ext === ".webp") {
        await sharp(fullPath)
          .webp({
            quality: 82,
          })
          .toFile(fullPath + ".tmp");
      }

      fs.unlinkSync(fullPath);
      fs.renameSync(fullPath + ".tmp", fullPath);

      const after = (fs.statSync(fullPath).size / 1024).toFixed(1);

      console.log(`${file}: ${before} KB → ${after} KB`);
    } catch (err) {
      console.error(file, err.message);
    }
  }
}

optimize(IMAGES_DIR).then(() => {
  console.log("✅ Optimization complete.");
});