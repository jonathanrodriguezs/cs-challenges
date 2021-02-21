function* range(start, stop, step = 1) {
  for (let i = start; step > 0 ? i <= stop : i >= stop; i += step) yield i
}

function isPrime(x) {
  for (let i = 2; i * i <= x; i++) {
    if (x % i == 0) return false
  }
  return true
}

function gap(g, m, n) {
  for (let number = m; number <= n; number++) {
    const next = number + g
    if (isPrime(number) && isPrime(next)) {
      const slice = [...range(number + 1, next - 1)]
      if (slice.some(isPrime)) number = next - 1
      else return [number, next]
    }
  }
  return null
}
