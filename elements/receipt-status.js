var f = require('./factory')
var types = [
  'ON_ORDER',
  'CURRENTLY_RECEIVED',
  'NOT_CURRENTLY_RECEIVED',
  'RECEIVED_AND_COMPLETE_OR_CEASED',
  'OTHER_RECEIPT_OR_ACQUISITIONS_STATUS',
  'UNKNOWN',
]

module.exports = function receiptStatus (s) {
  if (!s) return ''
  s = s.toUpperCase()

  if (types.indexOf(s) === -1) return ''
  return f('receiptStatus', {}, s)
}
