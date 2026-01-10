const findFunc = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
};

console.log(findFunc([1, 3, 5, 7], (v, i) => v > 1));
