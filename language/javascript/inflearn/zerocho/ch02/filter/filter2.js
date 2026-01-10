const arr = [{ age: 20 }, { age: 30 }, { age: 25 }];
const result = arr.filter((el) => el.age > 20);

console.log(result); // [ { age: 30 }, { age: 25 } ]
