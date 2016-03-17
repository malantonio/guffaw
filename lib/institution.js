var f = require('./factory')
module.exports = function institution (d) {
  if (!d) return ''
  return f('institution', {}, d)
}
