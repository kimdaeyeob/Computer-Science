const arr = [null, "hello", null, undefined, false];
let hasNull = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === null) {
    hasNull = true;
    break;
  }
}

console.log(hasNull); // true
