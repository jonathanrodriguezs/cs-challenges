const ALL_PRIMES = sieve(1100000)

function* range(start, stop, step = 1) {
  for (let i = start; step > 0 ? i <= stop : i >= stop; i += step) yield i
}

function sieve(n) {
  const numbers = [...range(2, n)]
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i++) {
    for (let j = i; j <= n / i; j++) {
      const index = i * j - 2
      if (numbers[index] !== null) numbers[index] = null
    }
  }
  return numbers
}

function gap(g, m, n) {
  const primes = ALL_PRIMES.slice(m - 2, n - 1).filter(item => item !== null)
  for (const [index, prime] of primes.entries()) {
    const nextPrime = primes[index + 1]
    if (nextPrime - prime === g) return [prime, nextPrime]
  }
  return null
}
