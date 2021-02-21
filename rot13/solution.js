function rotate(alphabet, letter, r = 13) {
  const alphaCount = alphabet.length
  const index = (alphabet.indexOf(letter) + r) % alphaCount
  return alphabet[index]
}

function rot13(message) {
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = lowers.toUpperCase()

  return message
    .split('')
    .map(char => {
      if (!/[a-zA-Z]/.test(char)) return char
      const alpha = char === char.toUpperCase() ? uppers : lowers
      return rotate(alpha, char)
    })
    .join('')
}

module.exports = { rot13 }
