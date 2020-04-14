function calculateCost(lines, width) {
  const lastIndex = lines.length - 1
  return lines.reduce((cost, line, index) => {
    return cost + (index < lastIndex ? Math.pow(width - line.length, 2) : 0)
  }, 0)
}

function wrapWords(words, width) {
  if (words.length === 0) {
    return []
  }

  let [line, ...remaining] = words

  let optimal = null
  let optimalCost = null

  while (line.length <= width) {
    const optimalForRemaining = wrapWords(remaining, width)
    const proposed = [line, ...optimalForRemaining]

    const costForProposed = calculateCost(proposed, width)
    if (optimalCost === null || costForProposed < optimalCost) {
      optimal = proposed
      optimalCost = costForProposed
    }

    if (remaining.length === 0) {
      break;
    }

    line += ' ' + remaining.shift()
  }

  if (optimal === null) {
    throw new Error('Encountered a word that doesn\'t fit on a single line')
  }

  return optimal
}

/**
 * Wraps a text over multiple lines in an optimal fashion,
 * i.e. tries to wrap the text in such a way that the length
 * of each line is as constant as possible.
 *
 * It gives a penalty for all whitespace characters at the end
 * of a line squared, excluding the last line.
 *
 * @param text The text to wrap over multiple lines
 * @param width The maximum width in characters of each line
 */
function wrapOptimal(text, width) {
  if (typeof width !== 'number' || width <= 0) {
    throw new Error('width should be a number greater than 0')
  }

  const words = text.trim().split(/\s+/)

  const lines = wrapWords(words, width)

  return lines.join('\n')
}

module.exports = wrapOptimal
