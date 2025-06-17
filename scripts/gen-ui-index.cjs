// scripts/gen-ui-index.cjs
const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "../packages/ui/shadcn");
const indexFile = path.join(srcDir, "index.ts");

const files = fs
  .readdirSync(srcDir)
  .filter(
    (file) =>
      (file.endsWith(".tsx") || file.endsWith(".ts")) &&
      !file.startsWith("index.")
  );

const lines = files.map((file) => {
  const name = path.basename(file, path.extname(file));
  return `export * from "./${name}";`;
});

fs.writeFileSync(indexFile, lines.join("\n") + "\n");

console.log(`✅ Generated shadcn/index.ts with ${files.length} exports.`);
