var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

module.exports = function institution (d) {
  if (isEmpty(d)) return ''
  return f('institution', {}, d)
}
