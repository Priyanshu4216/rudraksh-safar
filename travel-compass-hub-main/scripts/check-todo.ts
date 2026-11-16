import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const kumbhDataDir = path.resolve(projectRoot, 'src/data/kumbh');

interface TodoItem {
  file: string;
  line: number;
  preview: string;
}

function scanDir(dir: string, items: TodoItem[] = []): TodoItem[] {
  if (!fs.existsSync(dir)) return items;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath, items);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('TODO_VERIFY')) {
          items.push({
            file: path.relative(projectRoot, fullPath),
            line: idx + 1,
            preview: line.trim()
          });
        }
      });
    }
  }
  return items;
}

const foundTodos = scanDir(kumbhDataDir);

console.log('\n======================================================');
console.log('🔍 HARIDWAR KUMBH 2027: BUILD-TIME TODO_VERIFY AUDIT');
console.log('======================================================');

if (foundTodos.length === 0) {
  console.log('✅ No pending TODO_VERIFY fields found! All facts are verified.');
  process.exit(0);
} else {
  console.log(`⚠️  Found ${foundTodos.length} fields requiring operational verification:\n`);
  foundTodos.forEach((item, index) => {
    console.log(`  ${index + 1}. [${item.file}:${item.line}]`);
    console.log(`     -> ${item.preview}`);
  });
  console.log('\n------------------------------------------------------');
  console.log('📋 NOTICE: These fields are intentionally preserved as typed');
  console.log('   placeholders until verified by Rudraksh Safar operations.');
  console.log('======================================================\n');

  const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--fail-on-todo');
  if (isProduction) {
    console.error('❌ PRODUCTION BUILD FAILED: Unverified TODO_VERIFY fields detected in production mode.');
    process.exit(1);
  } else {
    console.log('ℹ️  Development/Audit check passed. (Remember to fill verified values before production release)');
    process.exit(0);
  }
}
