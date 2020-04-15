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
  // TODO: implement
}

module.exports = wrapOptimal
