var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

module.exports = function shelvingLocation (sl) {
  if (isEmpty(sl)) return ''
  return f('shelvingLocation', {}, sl)
}
