var f = require('./factory')
var xmlHeader = require('./xml-header')
var copy = require('./copy')

module.exports = function entry (data) {
  return [
    xmlHeader(),
    f('entry', {xmlns: 'http://www.w3.org/2005/Atom'}, [
      f('content', {type: 'application/xml'}, [
        copy(data)
      ])
    ])
  ].join('')
}
