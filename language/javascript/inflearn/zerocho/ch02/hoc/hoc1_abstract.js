/**
 * High Order Function
 * - 함수를 인자로 받거나, 함수를 반환하는 함수
 */

/**
 * * 1) 추상화 수준 향상 & 선언적 프로그래밍
 * - 추상화: 복잡한 내부 로직을 숨기고 중요 개념만 드러냄
 * - 선언적 프로그래밍: 무엇을 할 것인지에 집중, 어떻게 할 것인지에 집중하지 않음
 */

const numbers = [1, 2, 3];

// 명령형 프로그래밍
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("명령형 결과: ", sum); // 6

// 선언적 프로그래밍
const result = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("선언형 결과: ", result); // 6
