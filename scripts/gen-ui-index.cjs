const fs = require("fs");
const path = require("path");

const componentsDir = path.resolve(__dirname, "../packages/ui/shadcn");
const indexPath = path.resolve(__dirname, "../packages/ui/index.ts");

const files = fs.readdirSync(componentsDir);
const tsxFiles = files.filter((f) => f.endsWith(".tsx"));

const exportLines = tsxFiles
  .map((file) => {
    const name = file.replace(/\.tsx$/, "");
    return `export * from "./shadcn/${name}";`;
  })
  .join("\n");

fs.writeFileSync(indexPath, exportLines + "\n");

console.log(`✅ Generated ${tsxFiles.length} exports in packages/ui/index.ts`);
