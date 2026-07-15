const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const VIDEO_DIR = path.join(__dirname, "../public");

const SUPPORTED = [".mp4", ".mov", ".mkv", ".avi", ".webm"];

function optimize(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      optimize(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!SUPPORTED.includes(ext)) continue;

    const temp = fullPath + ".tmp.mp4";

    const before = (stat.size / 1024 / 1024).toFixed(2);

    console.log(`Optimizing ${file}...`);

    execSync(
      `ffmpeg -y -i "${fullPath}" -c:v libx264 -preset slow -crf 24 -c:a aac -b:a 128k "${temp}"`,
      { stdio: "inherit" }
    );

    fs.unlinkSync(fullPath);
    fs.renameSync(temp, fullPath);

    const after = (
      fs.statSync(fullPath).size /
      1024 /
      1024
    ).toFixed(2);

    console.log(`${file}: ${before} MB → ${after} MB\n`);
  }
}

optimize(VIDEO_DIR);

console.log("✅ Video optimization complete.");