// This week’s question:
// Implement a ProductList class that has two methods, add(n)(which pushes the value n to the back of the list) and product(m)(which returns the product of the last m numbers in the list).David made an awesome template for submitting your solutions, if you’d like to use it!

class ProductList {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  multiply = (array) => array.reduce((acc, num) => acc * num, 1);

  takeLastNNums(num) {
    return this.list.slice(this.length - num, this.length);
  }

  add(num) {
    this.list.push(num);
    ++this.length;
    return this.list;
  }

  product(num) {
    const takeLastNNums = this.takeLastNNums(num);
    return this.multiply(takeLastNNums);
  }
}

// Usage:

const p = new ProductList();
p.add(7);         // [7]
p.add(0);         // [7,0]
p.add(2);         // [7,0,2]
p.add(5);         // [7,0,2,5]
p.add(4);         // [7,0,2,5,4]
p.product(3);     // return 40 because 2 * 5 * 4
