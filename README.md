# bad-words

A javascript filter for badwords

[![Testing Testing](https://github.com/web-mech/badwords/actions/workflows/test.yml/badge.svg)](https://github.com/web-mech/badwords/actions/workflows/test.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![TypeDoc](https://img.shields.io/badge/docs-typedoc-blue.svg)](https://web-mech.github.io/badwords/)

## Requirements

As of version 2, requires you either have an environment that understands ES2016 and beyond or a transpiler like Babel.

## Installation

    yarn add bad-words

## Usage

```js
import { Filter } from 'bad-words'
...
const filter = new Filter();

console.log(filter.clean("Don't be an ash0le")); //Don't be an ******
```

### Tagged templates

Clean strings inline with a tagged template literal. The recommended form is
`createFilter(options)`, which binds a tag to its own configured filter:

```js
import { createFilter } from 'bad-words'

const filter = createFilter({ placeHolder: 'x', exclude: ['hells'] })

filter`Don't be an ash0le` //Don't be an xxxxxx
filter`you ${userInput}!` //interpolated values are cleaned too
```

A zero-config `filter` tag is also exported for quick use — it's equivalent to
`createFilter()`:

```js
import { filter } from 'bad-words'

filter`Don't be an ash0le` //Don't be an ******
```

The tag joins the template's literals and interpolated values, then cleans the
whole string — output is identical to calling `.clean()` on the same text.

### Placeholder Overrides

```js
const customFilter = new Filter({ placeHolder: 'x' })

customFilter.clean("Don't be an ash0le") //Don't be an xxxxxx
```

### Regex Overrides

```js
const filter = new Filter({ regex: /\*|\.|$/gi })

const filter = new Filter({ replaceRegex: /[A-Za-z0-9가-힣_]/g })
//multilingual support for word filtering
```

### Add words to the blacklist

```js
const filter = new Filter()

filter.addWords('some', 'bad', 'word')

filter.clean('some bad word!') //**** *** ****!

//or use an array using the spread operator

const newBadWords = ['some', 'bad', 'word']

filter.addWords(...newBadWords)

filter.clean('some bad word!') //**** *** ****!

//or

const filter = new Filter({ list: ['some', 'bad', 'word'] })

filter.clean('some bad word!') //**** *** ****!
```

### Instantiate with an empty list

```js
const filter = new Filter({ emptyList: true })
filter.clean('hell this wont clean anything') //hell this wont clean anything
```

### Remove words from the blacklist

```js
const filter = new Filter()

filter.removeWords('hells', 'sadist')

filter.clean('some hells word!') //some hells word!

//or use an array using the spread operator

const removeWords = ['hells', 'sadist']

filter.removeWords(...removeWords)

filter.clean('some sadist hells word!') //some sadist hells word!
```

## API Reference

Check out [TypeDoc Documentation](https://web-mech.github.io/badwords/)

## Testing

    yarn test

## License

The MIT License (MIT)

Copyright (c) 2013 Michael Price

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
