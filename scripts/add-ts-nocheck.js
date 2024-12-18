import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directory to be processed
const archiveDir = join(__dirname, "../archive");

// Function to add // @ts-nocheck to each .ts file
function addTsNoCheck(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively process subdirectories
      addTsNoCheck(filePath);
    } else if (file.endsWith(".ts")) {
      // Read the file contents
      const content = fs.readFileSync(filePath, "utf8");
      // Add // @ts-nocheck if not already present
      if (!content.startsWith("// @ts-nocheck")) {
        const newContent = `// @ts-nocheck\n${content}`;
        fs.writeFileSync(filePath, newContent, "utf8");
        console.log(`Added // @ts-nocheck to ${filePath}`);
      }
    }
  });
}

// Start processing the archive directory
addTsNoCheck(archiveDir);
