/**
 * * filter > 조건에 맞는 모든 요소를 찾아서 배열로 반환
 */

const arr = [1, 2, 3, 4, 5];
const result = arr.filter((el, index) => {
  return el > 2;
});

console.log(result); // [ 3, 4, 5 ]
