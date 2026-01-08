const arr = {
  0: "hello",
  1: "I'm",
  2: "Object",
  length: 3,
};

console.log(arr[0]); // hello
console.log(arr[1]); // I'm
console.log(arr[2]); // Object

console.log(arr.length); // 3

// arr.push(1);

/**
 * * 유사 배열 객체
 * ! 유사 배열 객체를 배열로 바꾸어야 배열 메서드를 사용할 수 있음
 * * - 자바스크립트 엔진이나 브라우저 API가 특정 데이터를 이 형식으로 반환하므로 사용
 */

console.log(Array.from(arr).indexOf("Object"));
