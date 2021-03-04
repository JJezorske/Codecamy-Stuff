const charCount = (string, char) => {
  let count = 0
  for (let i = 0; i < string.length; i++) {
   if (string[i] === char) {count += 1}
  }
  return count
}
const subLength = (string, letter) => {
 if (charCount(string, letter) === 2) {
  let first = string.indexOf(letter)
  let last = string.lastIndexOf(letter)
  return (last - first) +1
 } else {
   return 0
 }
}
console.log(subLength('digitize', 'i'))
