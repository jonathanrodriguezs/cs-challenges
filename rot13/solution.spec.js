const assert = require('assert').strict
const { rot13 } = require('./solution')

try {
  assert.equal(rot13('Ground control to Major Tom'), 'Tebhaq pbageby gb Znwbe Gbz')
  assert.equal(rot13('En los ascensores'), 'Ra ybf nfprafberf')
  assert.equal(rot13('Tebhaq pbageby gb Znwbe Gbz'), 'Ground control to Major Tom')
  assert.equal(rot13('Ra ybf nfprafberf'), 'En los ascensores')

  console.log('Tests passed')
} catch (error) {
  console.log('Tests failed')
  console.log(error)
}
