var f = require('./factory')

module.exports = function shelvingLocation (sl) {
  if (!sl) return ''
  return f('shelvingLocation', {}, sl)
}
