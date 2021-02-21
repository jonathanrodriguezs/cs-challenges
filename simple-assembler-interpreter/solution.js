function evaluator(instr, regx) {
  let steps = 1
  const instructions = ['mov', 'inc', 'dec', 'jnz']
  const tokens = instr.split(' ')

  const keyword = tokens[0]
  const identifier = tokens[1]

  if (!instructions.includes(keyword)) return null

  if (keyword === 'mov') {
    const value = isNaN(tokens[2]) ? regx[tokens[2]] : tokens[2]
    regx[identifier] = +value
  } else if (keyword === 'inc') {
    regx[identifier] = +regx[identifier] + 1
  } else if (keyword === 'dec') {
    regx[identifier] = +regx[identifier] - 1
  } else if (keyword === 'jnz') {
    const value = isNaN(tokens[1]) ? regx[tokens[1]] : tokens[1]
    if (value !== 0) steps = +tokens[2]
  }

  return { regx, steps }
}

function simple_assembler(program) {
  let regx = {}
  for (let i = 0; i < program.length; ) {
    const evaluated = evaluator(program[i], regx)
    regx = evaluated.regx
    i += evaluated.steps
  }
  return regx
}

module.exports = { simple_assembler }
