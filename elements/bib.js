var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

module.exports = function bib (b) {
  if (isEmpty(b)) return ''
  return f('bib', {}, b)
}
