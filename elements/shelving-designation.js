var f = require('./factory')
var h = require('./helpers')
var isEmpty = h.isEmpty
var notEmpty = h.filterNotEmpty

module.exports = function shelvingDesignation (sd) {
  if (isEmpty(sd)) return ''

  var prefix = (arrayify(sd.prefix) || []).map(function (p) {
    return f('prefix', {}, p)
  }).join('')

  var itemPart = (arrayify(sd.itemPart) || []).map(function(i) {
    return f('itemPart', {}, i)
  }).join('')

  var suffix = (arrayify(sd.suffix) || []).map(function (s) {
    return f('suffix', {}, s)
  }).join('')

  var scheme = sd.scheme.toUpperCase()

  return f('shelvingDesignation', {scheme: scheme}, [
    prefix,
    (sd.information ? f('information', {}, sd.information) : ''),
    itemPart,
    suffix
  ].filter(notEmpty))
}

function arrayify (e) {
  if (!e) return

  return Array.isArray(e) ? e : [e]
}
