import { readFile, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const app = join(root, "app");
const source = join(root, "source");

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = join(path, entry.name);
    files.push(...(entry.isDirectory() ? await walk(child) : [child]));
  }
  return files;
}

const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const manifest = JSON.parse(await readFile(join(app, "manifest.json"), "utf8"));
if (packageJson.name !== "opentab" || packageJson.author !== "jimmyu725") throw new Error("Invalid project identity");
if (manifest.name !== "OpenTab" || manifest.author !== "jimmyu725") throw new Error("Invalid extension identity");
if (manifest.key || manifest.update_url) throw new Error("Store identity fields must not be present");
await readFile(join(app, manifest.background.service_worker));
await readFile(join(app, manifest.chrome_url_overrides.newtab));
await readFile(join(app, manifest.action.default_popup));

const appFiles = await walk(app);
const appJs = appFiles.filter((path) => path.endsWith(".js"));
const sourceJs = (await walk(source)).filter((path) => path.endsWith(".js"));
for (const path of [...appJs, ...sourceJs]) {
  const result = spawnSync(process.execPath, ["--check", path], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`${path}: ${result.stderr.trim()}`);
}

const localeFiles = appFiles.filter((path) => /\/_locales\/[^/]+\/messages\.json$/.test(path));
let oldVisibleBranding = 0;
let undefinedLocalePlaceholders = 0;
let firstUndefinedLocalePlaceholder;
for (const path of localeFiles) {
  const messages = JSON.parse(await readFile(path, "utf8"));
  const text = Object.values(messages).map((entry) => entry?.message ?? "").join("\n");
  if (/infinity|hitab|wetab/i.test(text)) oldVisibleBranding += 1;
  for (const [key, entry] of Object.entries(messages)) {
    const placeholders = new Set(Object.keys(entry?.placeholders ?? {}));
    for (const match of (entry?.message ?? "").matchAll(/\$([A-Za-z][A-Za-z0-9_@]*)\$/g)) {
      if (placeholders.has(match[1])) continue;
      undefinedLocalePlaceholders += 1;
      firstUndefinedLocalePlaceholder ??= `${path}:${key}:$${match[1]}$`;
    }
  }
}
if (oldVisibleBranding) throw new Error(`${oldVisibleBranding} locale files contain old visible branding`);
if (undefinedLocalePlaceholders) throw new Error(`${undefinedLocalePlaceholders} undefined locale placeholders; first=${firstUndefinedLocalePlaceholder}`);
if (appJs.length !== 58 || sourceJs.length !== 58 || localeFiles.length !== 35) throw new Error("Unexpected project file counts");

console.log(`OK project=OpenTab author=jimmyu725 app_files=${appFiles.length} app_js=${appJs.length} source_js=${sourceJs.length} locales=${localeFiles.length} old_visible_branding=${oldVisibleBranding} undefined_locale_placeholders=${undefinedLocalePlaceholders}`);
