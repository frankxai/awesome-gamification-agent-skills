import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const textExtensions = new Set([".md", ".json", ".mjs", ".yml", ".yaml", ".txt"]);
const errors = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }

  return files;
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function validateSkill(file, text) {
  const relative = rel(file);
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push(`${relative}: missing YAML frontmatter`);
    return;
  }

  const frontmatter = match[1];
  if (!/^name:\s+\S+/m.test(frontmatter)) {
    errors.push(`${relative}: missing frontmatter name`);
  }
  if (!/^description:\s+.+/m.test(frontmatter)) {
    errors.push(`${relative}: missing frontmatter description`);
  }
}

const files = await walk(root);

for (const file of files) {
  const ext = path.extname(file);
  if (!textExtensions.has(ext)) continue;

  const text = await readFile(file, "utf8");
  const relative = rel(file);

  if (/[ \t]+$/m.test(text)) {
    errors.push(`${relative}: trailing whitespace`);
  }

  if (ext === ".json") {
    try {
      JSON.parse(text);
    } catch (error) {
      errors.push(`${relative}: invalid JSON: ${error.message}`);
    }
  }

  if (relative.startsWith("skills/") && relative.endsWith("/SKILL.md")) {
    validateSkill(file, text);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${files.length} files.`);

