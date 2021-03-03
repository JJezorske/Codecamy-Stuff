
/*
const isTheDinnerVegan = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === 'plant') {
    return true
    } else {
      return false
    }
  }
}
*/
const isVegan  = obj => {
  obj.source === 'plant'
}
const isTheDinnerVegan = arr => {
  return (arr.every(isVegan))
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(dinner.every(isVegan))
console.log(isTheDinnerVegan(dinner))
// Should print false
