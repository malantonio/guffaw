var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

module.exports = function temporaryLocation (t) {
  if (isEmpty(t)) return ''
  return f('temporaryLocation', {}, t)
}
