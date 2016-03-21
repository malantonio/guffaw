var header = require('./elements/xml-header')
var entry = require('./elements/entry')

function xmlifyCopyResource (data) {
  return [
    header(),
    entry(data),
  ].join('')
}

module.exports = xmlifyCopyResource
