var f = require('./factory')
var h = require('./helpers')
var currReg = /^[A-Z]{3}$/
var isEmpty = h.isEmpty
var notEmpty = h.filterNotEmpty
var isNonNegative = h.isNonNegative

module.exports = function cost (c) {
  if (isEmpty(c)) return ''

  return f('cost', {}, [
    (c.currency && currReg.test(c.currency) ? f('currency', {}, c.currency) : ''),
    (c.amount && isNonNegative(c.amount) ? f('amount', {}, c.amount) : ''),
    (c.qualifier ? f('qualifier', {}, c.qualifier) : ''),
  ].filter(notEmpty))
}
