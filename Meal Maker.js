const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  
  },
    get appetizers() {
      return this._courses.appetizers
    },
    get mains() {
      return this._courses.mains
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(newAppetizer) {
      this._courses.appetizers = newAppetizer;
    },
    set mains(newMains) {
      this._courses.mains = newMains;
    },
    set desserts(newDesserts) {
      this._courses.desserts = newDesserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
   addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    }, 
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },
  generateRandomMeal() {
    const appetizer = 
    this.getRandomDishFromCourse('appetizers');
    const main = 
    this.getRandomDishFromCourse('mains');
    const dessert = 
    this.getRandomDishFromCourse('desserts');
    const totalPrice = 
    appetizer.price + main.price + dessert.price;
    return `Your meal consists of ${appetizer.name}, ${main.name}, and ${dessert.name} and will cost £${totalPrice}`
  } 
};
menu.addDishToCourse('desserts', 'cake', 2.00)
menu.addDishToCourse('desserts', 'trifle', 2.00)
menu.addDishToCourse('desserts', 'Tiramasu', 1.50)
menu.addDishToCourse('mains', 'pasta', 3.00)
menu.addDishToCourse('mains', 'pizza', 3.00)
menu.addDishToCourse('mains', 'lasagna', 3.50)
menu.addDishToCourse('appetizers', 'soup', 1.00)
menu.addDishToCourse('appetizers', 'bread', 1.00)
menu.addDishToCourse('appetizers', 'nachos', 1.50)
let meal = menu.generateRandomMeal();
console.log(meal);
