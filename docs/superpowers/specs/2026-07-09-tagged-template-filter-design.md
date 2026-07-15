# Tagged Template Filter Helper — Design

**Date:** 2026-07-09
**Status:** Approved (pending final spec review)

## Goal

Let consumers clean strings with a tagged template literal, in the style of
drizzle-orm's `sql` tag:

```js
import { createFilter } from 'bad-words'

const filter = createFilter({ placeHolder: '*' })
filter`bad ass` // 'bad ***'
```

## Compatibility

Purely additive. Every existing export (`Filter`, `FilterOptions`,
`LocalList`) is untouched, so all current imports keep working in both CJS and
ESM. Ships as a semver-**minor** release (4.1.0, `feat:` commit for
standard-version).

## API

New module `src/tag.ts`, re-exported from `src/index.ts`:

```ts
export type FilterTag = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => string

/** Recommended: build a tag bound to its own configured Filter. */
export function createFilter(options?: FilterOptions): FilterTag

/** Zero-config shorthand, equivalent to createFilter(). */
export const filter: FilterTag
```

## Semantics

1. **Cook, then clean.** The tag joins literals and interpolations in order
   (values coerced with `String()`), then passes the whole cooked string
   through `Filter#clean`. Output is identical to
   `new Filter(options).clean(cooked)` — the tag is sugar, not a second
   filtering code path.
2. **Interpolations are not trusted.** Unlike drizzle (literals trusted,
   params escaped), everything is cleaned, including profanity assembled
   across an interpolation boundary: `` filter`as${'s'}` `` → `'***'`.
3. **Lazy instance.** Each tag creates its `Filter` on first invocation and
   reuses it afterward. Importing the module costs nothing; repeated calls do
   not rebuild the word list. Note: like any long-lived `Filter`, a tag from
   `createFilter` holds one instance — later `addWords`/`removeWords` calls on
   other instances don't affect it.
4. **No new error paths.** Anything `clean()` accepts, the tag accepts.

## Documentation

- README gets a "Tagged templates" section under usage. It leads with
  `createFilter(options)` as the **recommended** form (works with
  `placeHolder`, `exclude`, custom lists) and mentions the bare `filter`
  export as zero-config shorthand.
- Both exports get typedoc comments consistent with the existing style.

## Testing (TDD, `tests/tag.spec.ts`)

- cleans profanity in literals (`` filter`bad ass` ``)
- cleans interpolated values (`` filter`you ${'ash0le'}!` ``)
- cleans profanity assembled across a literal/interpolation boundary
- coerces non-string interpolations (`String()`)
- `createFilter` honors `placeHolder`
- `createFilter` honors `exclude`
- empty template returns `''`
- parity: tag output === `Filter#clean` output for the same cooked input

## Implementation plan

1. RED: write `tests/tag.spec.ts` with the cases above; watch them fail
   (module doesn't exist).
2. GREEN: implement `src/tag.ts` (`createFilter`, `filter`, `FilterTag`);
   re-export from `src/index.ts`; watch all tests pass.
3. Verify: full ava suite, `npm run lint`, `npm run build`,
   `npm run test:packaging` (confirms the new exports work from the packed
   tarball in both CJS and ESM).
4. README section + typedoc comments.
