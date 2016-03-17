var f = require('./factory')
module.exports = function copyNumber (c) {
  if (!c) return ''
  return f('copyNumber', {}, c)
}
