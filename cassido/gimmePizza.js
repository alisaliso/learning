// Given an array of people objects (where each person
// has a name and a number of pizza slices they’re
// hungry for) and a number for the number of slices
// that the pizza can be sliced into, return the number of pizzas
// you need to buy.

const arr = [{ name: 'Joe', num: 9 }, { name: 'Cami', num: 3 }, { name: 'Cassidy', num: 4 }]

const gimmePizza = (arr, num) => {
  const slices = arr.reduce((acc, person) => acc + person.num, 0);
  return Math.ceil(slices / num);
}

gimmePizza(arr, 8);

// 2 — 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered
