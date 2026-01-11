const arr = [1, 5, 4, 2, 3];
const shallowCopyArr = [...arr];
shallowCopyArr.sort((a, b) => b - a);
console.log(arr);
console.log(shallowCopyArr);
