var f = require('./factory')
module.exports = function temporaryLocation (t) {
  if (!t) return ''
  return f('temporaryLocation', {}, t)
}
