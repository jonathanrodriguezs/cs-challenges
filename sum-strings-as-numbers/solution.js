function initialeArrayZeros(array, length) {
  return [...new Array(length).fill(0), ...array].map(Number)
}

function sumStrings(a, b) {
  const max = Math.max(a.length, b.length)
  const result = new Array(max + 1).fill(0)
  const n1 = initialeArrayZeros(a, max - a.length + 1)
  const n2 = initialeArrayZeros(b, max - b.length + 1)
  for (let i = max; i > 0; i--) {
    const sum = n1[i] + n2[i] + result[i]
    result[i] = sum % 10
    if (sum >= 10) result[i - 1]++
  }
  return result.join('').replace(/^0+/, '')
}
