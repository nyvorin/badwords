import type { FilterOptions } from './badwords.js'
import { Filter } from './badwords.js'

/**
 * Tagged template function that returns the cleaned template string.
 *
 * @param {TemplateStringsArray} strings - Literal portions of the template.
 * @param {...unknown} values - Interpolated values, coerced with String().
 */
export type FilterTag = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => string

/**
 * Create a tagged template function bound to its own Filter.
 *
 * The tag joins the template's literals and interpolated values in order,
 * then cleans the whole string — output is identical to
 * `new Filter(options).clean(...)` on the cooked string. The Filter is
 * created lazily on first use and reused for subsequent calls.
 *
 * @example
 * const filter = createFilter({ placeHolder: 'x' })
 * filter`bad ass` // 'bad xxx'
 *
 * @param {FilterOptions} options - Constructor options for the bound Filter.
 */
export function createFilter(options: FilterOptions = {}): FilterTag {
  let instance: Filter | undefined

  return (strings, ...values) => {
    instance ??= new Filter(options)

    const cooked = strings.reduce(
      (out, part, i) =>
        out + part + (i < values.length ? String(values[i]) : ''),
      '',
    )

    return instance.clean(cooked)
  }
}

/**
 * Zero-config tagged template filter, equivalent to `createFilter()`.
 *
 * @example
 * filter`bad ass` // 'bad ***'
 */
export const filter: FilterTag = createFilter()
