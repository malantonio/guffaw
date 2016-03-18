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
var holding = require('./holding')

module.exports = function copy (data) {
  if (!data) return ''

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
    (data.holding || []).map(h => holding(h)).join(''),
  ])
}
