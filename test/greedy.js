const {expect} = require('chai')
const greedy = require('../src/greedy')

describe('Greedy', () => {
  it('can handle an empty string', () => {
    let text = ''
    expect(greedy(text, 20)).to.equal(text)
  })

  it('can handle a single word', () => {
    let text = 'single'
    expect(greedy(text, 20)).to.equal(text)
  })

  it('splits three words over two lines', () => {
    let text = 'three word sentence'
    expect(greedy(text, 12)).to.equal('three word\nsentence')
  })

  it('trims leading whitespace', () => {
    let text = '  text'
    expect(greedy(text, 20)).to.equal('text')

    text = '\ntext'
    expect(greedy(text, 20)).to.equal('text')
  })

  it('trims trailing whitespace', () => {
    let text = 'text  '
    expect(greedy(text, 20)).to.equal('text')

    text = 'text\n'
    expect(greedy(text, 20)).to.equal('text')
  })

  it('reduces consecutive whitespaces to a single whitespace', () => {
    let text = 'two   \nwords'
    expect(greedy(text, 20)).to.equal('two words')
  })

  it('throws an error when encountering a word that\'s too long for a single line', () => {
    let text = 'sentence'
    expect(() => greedy(text, 7)).to.throw('Encountered a word that doesn\'t fit on a single line')
    expect(greedy(text, 8)).to.equal(text)

    text = 'A sentence with only one word that\'s longer than requested.'
    expect(() => greedy(text, 8)).to.throw('Encountered a word that doesn\'t fit on a single line')
  })

  it('correctly splits a long text', () => {
    let text = `
      This is a long text containing some overenthousiasticly long words to test the
      absolute limits of this algorithm. If everything goes well, this text should be
      perfectly split over multiple lines, no line exceeding the requested line width
      of thirty two characters. Let's put our algorithm to the test, shall we?
    `
    expect(greedy(text, 32)).to.equal(
`This is a long text containing
some overenthousiasticly long
words to test the absolute
limits of this algorithm. If
everything goes well, this text
should be perfectly split over
multiple lines, no line
exceeding the requested line
width of thirty two characters.
Let's put our algorithm to the
test, shall we?`
    )
  })
})
