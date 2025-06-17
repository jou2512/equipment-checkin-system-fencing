const fs = require("fs");
const path = require("path");

function copyBaseCss() {
  console.log("🔧 Starting base.css copy process...");

  try {
    let baseCssPath;
    let baseCssContent;

    // 1. ENTWICKLUNG: Workspace-Pfad versuchen
    baseCssPath = path.resolve(
      __dirname,
      "../../tailwind-config/dist/base.css"
    );
    console.log(`🔍 Checking workspace path: ${baseCssPath}`);

    if (fs.existsSync(baseCssPath)) {
      console.log("✅ Development mode: Using workspace tailwind-config");
      baseCssContent = fs.readFileSync(baseCssPath, "utf8");
    } else {
      // 2. PRODUKTION: npm Package-Pfad versuchen
      baseCssPath = path.resolve(
        __dirname,
        "../node_modules/@fecs/tailwind-config/dist/base.css"
      );
      console.log(`🔍 Checking npm package path: ${baseCssPath}`);

      if (fs.existsSync(baseCssPath)) {
        console.log("🚀 Production mode: Using npm package tailwind-config");
        baseCssContent = fs.readFileSync(baseCssPath, "utf8");
      } else {
        console.error("❌ base.css not found in workspace or node_modules");
        console.error("Make sure @fecs/tailwind-config is installed and built");
        process.exit(1);
      }
    }

    // EINFACH KOPIEREN - NICHT durch Tailwind laufen lassen!
    const outputPath = path.resolve(__dirname, "../dist/styles.css");
    console.log(`📝 Copying base.css directly to: ${outputPath}`);

    // Sicherstellen, dass dist-Ordner existiert
    const distDir = path.dirname(outputPath);
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Direkt kopieren
    fs.writeFileSync(outputPath, baseCssContent);
    console.log("✅ base.css successfully copied to dist/styles.css");
    console.log(
      `📊 Copied styles.css size: ${baseCssContent.length} characters`
    );
  } catch (error) {
    console.error("❌ Failed to copy base.css:", error.message);
    process.exit(1);
  }
}

copyBaseCss();
