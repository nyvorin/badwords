import test from 'ava'
import { Filter } from '../src/badwords.js'

test('clean: Should replace a bad word within a sentence asterisks (******)', (t) => {
  const filter = new Filter()
  console.log(filter.clean("Don't be an ash0le"))
  t.is(filter.clean("Don't be an ash0le"), "Don't be an ******")
})

test('clean: Should replace multiple instances of any bad words within a sentence asterisks (******)', (t) => {
  const filter = new Filter()
  t.is(filter.clean('cnts ash0le knob xxx'), '**** ****** **** ***')
})

test('clean: Should not replace anything within a sentence if there are no bad words', (t) => {
  const filter = new Filter()
  t.is(filter.clean('The cat ran fast'), 'The cat ran fast')
})

test('clean: Should replace a string with proper placeholder when overridden', (t) => {
  const customFilter = new Filter({ placeHolder: 'x' })
  t.is(
    customFilter.clean('This is a hells good test'),
    'This is a xxxxx good test',
  )
})

test('clean: Should allow an instance of filter with an empty blacklist', (t) => {
  const customFilter = new Filter({
    emptyList: true,
  })
  t.is(
    customFilter.clean('This is a hells good test'),
    'This is a hells good test',
  )
})

test('clean: Should tokenize words according to regex word boundaries', (t) => {
  const filter = new Filter()
  t.is(filter.clean('what a bitch...fuck you'), 'what a *****...**** you')
  t.is(filter.clean("<p>Don't be an asshole</p>"), "<p>Don't be an *******</p>")
})

/**
xtest('clean: Should filter words that are derivatives of words from the filter blacklist', (t) => {

  const filter = new Filter()
  t.is(filter.clean('shitshit'), '********')
  }) */

test("clearn: Shouldn't filter words that aren't profane.", (t) => {
  const filter = new Filter()
  t.is(filter.clean('hello there'), 'hello there')
})

test('clean: Should seperate string with backspace or underscore', (t) => {
  const filter = new Filter()
  t.is(filter.clean("Don't be an ash0le_word"), "Don't be an ******word")
})

test('clean: Should not replace anything of a single and not profane word', (t) => {
  const filter = new Filter()
  t.is(filter.clean('áéñóú'), 'áéñóú')
})

test('clean: Should not throw exceptions when nothing but whitespace passed to filter', (t) => {
  const filter = new Filter()
  const testString = `



  `

  const testString2 = `



  Hello

  `

  const testString3 = `



    Fuck


    `
  t.is(filter.clean(testString), testString)
  t.is(filter.clean(testString2), testString2)
  t.is(
    filter.clean(testString3),
    `



    ****


    `,
  )
  t.is(filter.clean(''), '')
})

test('clean: Cleans non-english sentences', (t) => {
  const filter = new Filter()

  const ruBadWordTest = 'мило'
  const cnBadWordTest = '吃'
  const jpBadWordTest = 'ワイン'

  let teststring = filter.clean(ruBadWordTest)
  t.is(filter.clean(teststring), ruBadWordTest)

  teststring = filter.clean(cnBadWordTest)
  t.is(filter.clean(teststring), cnBadWordTest)

  teststring = filter.clean(jpBadWordTest)
  t.is(filter.clean(teststring), jpBadWordTest)
})
