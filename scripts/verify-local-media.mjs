import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourceRoot = path.join(projectRoot, "src");

function collectSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectSourceFiles(entryPath);
    }

    return /\.(css|ts|tsx)$/.test(entry.name) ? [entryPath] : [];
  });
}

const sourceFiles = collectSourceFiles(sourceRoot);
const remoteMedia = [];
const referencedAssets = new Set();

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  const relativeFile = path.relative(projectRoot, file);

  for (const match of source.matchAll(/https?:\/\/[^\s"')]+/g)) {
    if (
      /(?:digitalassets\.tesla\.com|tesla-cdn\.thron\.com)/i.test(match[0]) ||
      /\.(?:avif|gif|jpe?g|mov|mp4|png|svg|webm|webp)(?:\?|$)/i.test(match[0])
    ) {
      remoteMedia.push(`${relativeFile}: ${match[0]}`);
    }
  }

  for (const match of source.matchAll(/\/assets\/[A-Za-z0-9_./-]+/g)) {
    referencedAssets.add(match[0]);
  }
}

const missingAssets = [...referencedAssets].filter(
  (asset) => !fs.existsSync(path.join(projectRoot, "public", asset)),
);

if (remoteMedia.length || missingAssets.length) {
  if (remoteMedia.length) {
    console.error("Remote media URLs found:\n" + remoteMedia.join("\n"));
  }

  if (missingAssets.length) {
    console.error("Missing local assets:\n" + missingAssets.join("\n"));
  }

  process.exit(1);
}

console.log(
  `Verified ${referencedAssets.size} local media references with no remote media URLs.`,
);
