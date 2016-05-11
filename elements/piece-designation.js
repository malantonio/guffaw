var f = require('./factory')
var isEmpty = require('./helpers').isEmpty
var pieceReg = /[^BU].*/

module.exports = function pieceDesignation (p) {
  if (!isEmpty(p) && pieceReg.test(p)) {
    return f('pieceDesignation', {}, p)
  }

  return ''
}
