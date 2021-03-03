/*
const compare = (word, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true
    }
  }
}
//console.log(compare('pogs',coolStuff))
const justCoolStuff = (arr1, arr2) => {
  const result = 
  arr1.filter(word => compare(word, arr2));
  return result
  }
*/

const justCoolStuff = (arr1, arr2) => {
  const result = 
  arr1.filter(word => arr2.includes(word));
  return result
  }


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
