var f = require('./factory')
var institution = require('./institution')
var bib = require('./bib')
var lastUpdateDate = require('./last-update-date')
var recordType = require('./record-type')
var receiptStatus = require('./receipt-status')
var copyNumber = require('./copy-number')
var holdingLocation = require('./holding-location')
var shelvingDesignation = require('./shelving-designation')
var shelvingLocation = require('./shelving-location')
var previousShelvingLocation = require('./previous-shelving-location')
var holding = require('./holding')
var isEmpty = require('./helpers').isEmpty

module.exports = function copy (data) {
  if (isEmpty(data)) return ''

  return f('copy', {xmlns: 'http://worldcat.org/xmlschemas/Copy-1.0', id: data.id}, [
    institution(data.institution),
    bib(data.bib),
    lastUpdateDate(data.lastUpdateDate),
    recordType(data.recordType),
    receiptStatus(data.receiptStatus),
    copyNumber(data.copyNumber),
    holdingLocation(data.holdingLocation),
    shelvingDesignation(data.shelvingDesignation),
    shelvingLocation(data.shelvingLocation),
    (data.previousShelvingLocation || []).map(previousShelvingLocation).join(''),
    (data.holding || []).map(holding).join(''),
  ])
}
