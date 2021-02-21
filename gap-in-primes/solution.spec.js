const assert = require('assert').strict
const { gap } = require('./solution')

try {
  assert.deepEqual(gap(2, 5, 7), [5, 7])
  assert.deepEqual(gap(2, 5, 5), null)
  assert.deepEqual(gap(6, 100, 110), null)
  assert.deepEqual(gap(4, 130, 200), [163, 167])

  console.log('Tests passed')
} catch (error) {
  console.log('Tests failed')
  console.log(error)
}
