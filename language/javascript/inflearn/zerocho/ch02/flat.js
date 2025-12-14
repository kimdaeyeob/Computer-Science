/**
 * * flat()
 * - 배열 안에 중첩된 배열을 지정한 깊이 만큼 평탄화하여 새로운 배열을 반환
 * - 기본 깊이는 1
 */
const arr = [
  [1, 2, 3],
  [, 4, 5, 6],
  [, 7, 8, 9],
];

console.log(arr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const arr2 = [1, [2, [3, 4]]];
console.log(arr2.flat()); // [ 1, 2, [ 3, 4 ] ]
console.log(arr2.flat(2)); // [ 1, 2, 3, 4 ]
