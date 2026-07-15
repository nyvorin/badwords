import test from 'ava'
import { Filter, filter, createFilter } from '../src/index.js'

test('tag: Should clean profanity in template literals', (t) => {
  t.is(filter`bad ass`, 'bad ***')
})

test('tag: Should clean profanity in interpolated values', (t) => {
  const userInput = 'ash0le'
  t.is(filter`you ${userInput}!`, 'you ******!')
})

test('tag: Should clean profanity assembled across an interpolation boundary', (t) => {
  t.is(filter`as${'s'}`, '***')
})

test('tag: Should coerce non-string interpolated values', (t) => {
  t.is(filter`${1} ash0le`, '1 ******')
})

test('tag: Should return an empty string for an empty template', (t) => {
  t.is(filter``, '')
})

test('createFilter: Should honor the placeHolder option', (t) => {
  const custom = createFilter({ placeHolder: 'x' })
  t.is(custom`bad ass`, 'bad xxx')
})

test('createFilter: Should honor the exclude option', (t) => {
  const custom = createFilter({ exclude: ['ass'] })
  t.is(custom`bad ass`, 'bad ass')
})

test('tag: Should match Filter#clean output for the same cooked string', (t) => {
  const input = "Don't be an ash0le, you bad ass"
  t.is(filter`Don't be an ${'ash0le'}, you bad ass`, new Filter().clean(input))
})
