/**
 * * clearInterval(intervalID)
 * ! 취소할 인터벌 ID를 인수로 전달받아 해당 인터벌을 취소하는 함수
 */

const testIntervalId = setInterval(() => {
  console.log("1초마다 실행됩니다.");
}, 1000);

console.log("clearInterval 설정 이전");

clearInterval(testIntervalId); // 인터벌 취소

console.log("인터벌이 취소되었습니다.");
// 1초마다 실행됩니다. 출력되지 않음
