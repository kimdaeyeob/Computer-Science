const obj1 = [{ age: 20 }, { age: 30 }, { age: 25 }];
console.log(obj1.includes({ age: 20 })); // false
console.log(obj1.find((item) => item.age === 20));
