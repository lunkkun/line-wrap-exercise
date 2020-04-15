const greedy = require('./src/greedy')
const optimal = require('./src/optimal')

const width = 24
const text = `
  This text is split into multiple lines
  with a maximum width of twenty-four
`

console.log(greedy(text, width))
console.log()
console.log(optimal(text, width))
