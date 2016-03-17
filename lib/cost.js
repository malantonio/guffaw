var f = require('./factory')
var currReg = /^[A-Z]{3}$/
var amountReg = /^[^-]\d+$/
module.exports = function cost (c) {
  if (!c) return ''

  return f('cost', {}, [
    (c.currency && currReg.test(c.currency) ? f('currency', {}, c.currency) : ''),
    (c.amount && amountReg.test(c.amount) ? f('amount', {}, c.currency) : ''),
    (c.qualifier ? f('qualifier', {}, c.qualifier) : ''),
  ])
}
