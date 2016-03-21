var f = require('./factory')
var reg = /^[A-Z]{4}$/

module.exports = function holdingLocation (h) {
  if (!h) return ''

  h = h.trim()
  if (h === '') return ''
  if (!reg.test(h)) return ''

  return f('holdingLocation', {}, h)
}
