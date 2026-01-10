/**
 * * findIndex > 찾은 요소의 인덱스 반환
 */
const arr = [1, 2, 3, 4, 5];
console.log(
  arr.findIndex((el, idx) => {
    return el > 3;
  })
);
