var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

module.exports = function copyNumber (c) {
  if (isEmpty(c)) return ''
  return f('copyNumber', {}, c)
}
