const arr = [null, "hello", null, undefined, false];
const hasNull = arr.some((v) => v === null);
console.log(hasNull); // true
