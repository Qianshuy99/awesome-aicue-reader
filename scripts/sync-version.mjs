import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const OLD_VERSION = '0.1.14';
const NEW_VERSION = '0.1.15';

function walk(dir, callback) {
	if (!existsSync(dir)) return;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, callback);
		else callback(full);
	}
}

function replaceInFile(file, pattern, replacement) {
	const content = readFileSync(file, 'utf8');
	const updated = content.replace(pattern, replacement);
	if (updated !== content) {
		writeFileSync(file, updated, 'utf8');
		console.log(`Updated: ${file}`);
	}
}

// Update docs markdown frontmatter
walk(join(root, 'docs'), (file) => {
	if (extname(file) === '.md') {
		replaceInFile(
			file,
			new RegExp(`^(version:\\s*)${OLD_VERSION}$`, 'm'),
			`$1${NEW_VERSION}`,
		);
	}
});

// Update feature-catalog.json
replaceInFile(
	join(root, 'docs/public/feature-catalog.json'),
	new RegExp(`"version":\\s*"${OLD_VERSION}"`, 'g'),
	`"version": "${NEW_VERSION}"`,
);

console.log(`Synced version from ${OLD_VERSION} to ${NEW_VERSION}`);
