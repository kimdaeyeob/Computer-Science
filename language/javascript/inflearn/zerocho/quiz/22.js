const filterFunc = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

// 해결책 1: return 추가
console.log(
  filterFunc([1, 3, 5, 7], (v, i) => {
    return v > 1;
  })
);

// 해결책 2: 중괄호 제거 (암시적 반환)
console.log(filterFunc([1, 3, 5, 7], (v, i) => v > 1));
