const wsChars = [' ', "\f", "\n", "\r", "\t"]

function addWord(line, word) {
  if (word !== '') {
    if (line !== '') {
      line += ' '
    }
    line += word
  }
  return line
}

function addLine(result, line) {
  if (line !== '') {
    if (result !== '') {
      result += "\n"
    }
    result += line
  }
  return result
}

/**
 * Wraps a text over multiple lines in a greedy fashion,
 * i.e. tries to place as many words on the first line,
 * than continues doing so on the next lines.
 *
 * @param text The text to wrap over multiple lines
 * @param width The maximum width in characters of each line
 */
function wrapGreedy(text, width) {
  let result = ''

  let line = ''
  let word = ''

  for (const char of text) {
    if (wsChars.includes(char)) {
      line = addWord(line, word)
      word = ''
    } else {
      word += char
      if (word.length > width) {
        throw new Error('Found a word that doesn\'t fit on a single line')
      }
    }

    if (line.length + (line === '' ? 0 : 1) + word.length > width) {
      result = addLine(result, line)
      line = ''
    }
  }

  line = addWord(line, word)
  result = addLine(result, line)

  return result
}

module.exports = wrapGreedy
