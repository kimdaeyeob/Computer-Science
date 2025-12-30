/**
 * * 불변성 > 함수형 프로그래밍에서 데이터는 변경되지 않아야 함
 * - JS의 대표적인 고차함수: map, filter, reduce 등 > 이 함수들은 원본 데이터를 변경하지 않고 새로운 데이터를 반환
 * - 불변성을 지키면
 * 1. 사이드 이펙트를 줄여서 디버깅을 쉽게 만들어줌
 * 2. 원본 데이터를 보존하므로 애플리케이션의 상태 변화를 추적하기 용이하게 만듦
 * 3. 코드의 예측 가능성과 안정성을 높일 수 있음
 */

// 불변성: 원본 배열을 변경하지 않고 새로운 배열을 반환
const addOne = (arr) => arr.map((n) => n + 1);

const originalArray = [1, 2, 3];
const newArray = addOne(originalArray);

console.log(originalArray); // [ 1, 2, 3 ]
console.log(newArray); // [ 2, 3, 4 ]

// 불변성을 지키지 않는 예시 (원본 배열이 변경됨)
const addOneInPlace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
};

const anotherOriginalArray = [1, 2, 3];
const modifiedArray = addOneInPlace(anotherOriginalArray);

console.log(anotherOriginalArray); // [ 2, 3, 4 ]
console.log(modifiedArray); // [ 2, 3, 4 ]
