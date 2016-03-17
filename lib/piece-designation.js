var f = require('./factory')
var pieceReg = /[^BU].*/

module.exports = function pieceDesignation (p) {
  if (p && pieceReg.test(p)) {
    return f('pieceDesignation', {}, p)
  }

  return ''
}
