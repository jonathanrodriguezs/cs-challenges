function rotate(alphabet, letter, r = 13) {
  const alphaCount = alphabet.length
  const index = (alphabet.indexOf(letter) + r) % alphaCount
  return alphabet[index]
}

function cipher(char) {
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = lowers.toUpperCase()

  if (!/[a-zA-Z]/.test(char)) return char
  const alpha = char === char.toUpperCase() ? uppers : lowers

  return rotate(alpha, char)
}

function rot13(message) {
  return message.split('').map(cipher).join('')
}

module.exports = { rot13 }
