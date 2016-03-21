var f = require('./factory')
var copy = require('./copy')

module.exports = function entry (data) {
  return [
    f('entry', {xmlns: 'http://www.w3.org/2005/Atom'}, [
      f('title', {type: 'text'}, data.title),
      f('content', {type: 'application/xml'}, [
        copy(data)
      ])
    ])
  ].join('')
}
