var f = require('./factory')
var reg = /^[A-Z]{4}$/
var isEmpty = require('./helpers').isEmpty

module.exports = function holdingLocation (h) {
  if (isEmpty(h)) return ''

  h = h.trim()
  if (h === '') return ''
  if (!reg.test(h)) return ''

  return f('holdingLocation', {}, h)
}
