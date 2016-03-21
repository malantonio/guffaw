var f = require('./factory')
module.exports = function bib (b) {
  if (!b) return ''
  return f('bib', {}, b)
}
