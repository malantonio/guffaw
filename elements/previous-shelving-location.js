var f = require('./factory')
var isEmpty = require('./helpers').isEmpty
module.exports = function previousShelvingLocation (p) {
  if (isEmpty(p)) return ''

  return f('previousShelvingLocation', {}, p)
}
