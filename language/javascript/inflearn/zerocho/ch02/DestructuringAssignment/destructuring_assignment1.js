const person = { name: "Alice", age: 30, city: "New York" };
const { name } = person;
const { age, city } = person;

console.log(name); // Alice
console.log(age); // 30
console.log(city + "\n"); // New York

/**
 * * * Destructuring Assignment2
 */
const arr = [10, 20, 30, 40, 50];
const [first, second, ...rest] = arr;

console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]
