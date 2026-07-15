#!/usr/bin/env bash
# Packs the package and verifies both require() and import() work
# from a consumer project, exactly as an npm user would experience it.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
TARBALL=""
cleanup() {
  rm -rf "$TMP"
  [ -n "$TARBALL" ] && rm -f "$TARBALL"
}
trap cleanup EXIT

cd "$ROOT"
npm run build >/dev/null 2>&1
TARBALL="$ROOT/$(npm pack --silent 2>/dev/null | tail -1)"

cd "$TMP"
npm init -y >/dev/null 2>&1
npm install --no-save --no-audit --no-fund "$TARBALL" >/dev/null 2>&1

cat >consume.cjs <<'EOF'
const { Filter, filter, createFilter } = require('bad-words')
const cleaned = new Filter().clean('ash0le')
if (cleaned !== '******') {
  throw new Error(`CJS: expected '******', got '${cleaned}'`)
}
if (filter`ash0le` !== '******') {
  throw new Error('CJS: filter tag misbehaved')
}
if (createFilter({ placeHolder: 'x' })`ash0le` !== 'xxxxxx') {
  throw new Error('CJS: createFilter tag misbehaved')
}
console.log('ok - CJS require()')
EOF

cat >consume.mjs <<'EOF'
import { Filter, filter, createFilter } from 'bad-words'
const cleaned = new Filter().clean('ash0le')
if (cleaned !== '******') {
  throw new Error(`ESM: expected '******', got '${cleaned}'`)
}
if (filter`ash0le` !== '******') {
  throw new Error('ESM: filter tag misbehaved')
}
if (createFilter({ placeHolder: 'x' })`ash0le` !== 'xxxxxx') {
  throw new Error('ESM: createFilter tag misbehaved')
}
console.log('ok - ESM import')
EOF

node consume.cjs
node consume.mjs
echo 'ok - packaging'
