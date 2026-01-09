const arr = Array(5)
  .fill(3)
  .map((num, index) => num * (index + 1) - index);

console.log(arr);
