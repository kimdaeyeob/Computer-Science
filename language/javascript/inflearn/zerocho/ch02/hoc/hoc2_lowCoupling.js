/**
 * * HOC > Low coupling
 * - 낮은 결합도 > 컴포넌트 간의 의존성을 최소화하여 유지보수성과 재사용성을 높이는 설계 원칙
 * - 낮은 결합도 예시 > filter 함수는 걸러내는 틀만 제공하고, 무엇을 걸러낼지는 외부에서 함수로 전달받은 predicatedFn에 맡김
 */

// 낮은 결합도: filter는 조건인 predicatedFn이 뭔지 몰라도 동작함
const filteredData = (arr, predicatedFn) => arr.filter(predicatedFn);

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 !== 0;

console.log(filteredData([1, 2, 3, 4, 5, 6], isEven)); // [ 2, 4, 6 ]
console.log(filteredData([1, 2, 3, 4, 5, 6], isOdd)); // [ 1, 3, 5 ]
