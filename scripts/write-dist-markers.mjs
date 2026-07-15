// The root package.json declares "type": "module", so Node would treat the
// compiled CommonJS files in dist/ as ESM. These per-directory markers pin
// the correct module scope for each build flavor.
import { writeFileSync } from 'node:fs'

writeFileSync('dist/package.json', JSON.stringify({ type: 'commonjs' }) + '\n')
writeFileSync(
  'dist/esm/package.json',
  JSON.stringify({ type: 'module' }) + '\n',
)
