function evaluator(instr, regs) {
  let steps = 1
  const instructions = ['mov', 'inc', 'dec', 'jnz']
  const tokens = instr.split(' ')
  const [x, y, z] = tokens

  if (!instructions.includes(x)) throw Error('Token unkwon: ' + x + ' at ' + instr)

  if (x === 'mov') {
    regs[y] = +(isNaN(z) ? regs[z] : z)
  } else if (x === 'inc') {
    regs[y] = +regs[y] + 1
  } else if (x === 'dec') {
    regs[y] = +regs[y] - 1
  } else if (x === 'jnz') {
    if (regs[tokens[1]] !== 0) steps = +z
  }

  return { regs, steps }
}

function simple_assembler(program) {
  let regs = {}
  for (let i = 0; i < program.length; ) {
    const evaluation = evaluator(program[i], regs)
    regs = evaluation.regs
    i += evaluation.steps
  }
  return regs
}

module.exports = { simple_assembler }
