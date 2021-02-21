const assert = require('assert').strict
const { simple_assembler } = require('./solution')

try {
  assert.deepEqual(
    simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']),
    { a: 1 }
  )
  assert.deepEqual(
    simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
    { a: 0, b: -20 }
  )

  console.log('Tests passed')
} catch (error) {
  console.log('Tests failed')
  console.log(error)
}
