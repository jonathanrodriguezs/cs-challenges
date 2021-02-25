function getValueFromRegExp(expr, regex, sep, index) {
  const [value] = expr.match(regex).filter(Boolean)
  if (!value) return null
  return value.split(sep)[index]
}

function differentiate(equation, point) {
  const r = /(\-?\d+)?x(\^\d)?/g
  const polynomial = equation.replace('-x', '-1x').match(r)
  let cofs = [],
    exps = []

  for (const [index, expr] of polynomial.entries()) {
    const exp = getValueFromRegExp(expr, /(\^\d)?/g, '^', 1)
    const cof = getValueFromRegExp(expr, /(\-?\d+)?x/g, 'x', 0) || 1
    exps[index] = +exp || 1
    if (cof) cofs[index] = +cof
  }

  return cofs.reduce(
    (pre, cur, idx) => pre + cur * exps[idx] * Math.pow(point, exps[idx] - 1),
    0
  )
}
