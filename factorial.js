function factorial(num) {
  let factArr = [];
  for (let i = num; i > 0; i--) {
    factArr.push(i);
    }
  const reducer = 
  (accumulator, currentVal) => {
   return (accumulator * currentVal);
  }
  return factArr.reduce(reducer);
  }

 
console.log(factorial(7))
