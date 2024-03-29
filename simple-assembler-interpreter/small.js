function simple_assembler(program) {
  const asm = { ip: 0, regs: {} }

  const code = {
    mov: (x, y) => (asm.regs[x] = +(isNaN(y) ? asm.regs[y] : y)),
    jnz: (x, y) => (asm.regs[x] !== 0 ? (asm.ip += +y - 1) : false),
    inc: x => asm.regs[x]++,
    dec: x => asm.regs[x]--,
  }

  while (asm.ip < program.length) {
    const [token, ...params] = program[asm.ip].split(' ')
    code[token](...params)
    asm.ip++
  }

  return asm.regs
}
