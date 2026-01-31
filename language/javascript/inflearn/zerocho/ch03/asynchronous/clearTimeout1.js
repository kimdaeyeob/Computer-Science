/**
 * * clearTimeout(*timeoutID)
 * ! setTimeout가 반환하는 Timeout ID를 이용해 예약된 작업을 취소할 수 있음
 */

const testTimerId = setTimeout(() => {
  console.log("3초 후에 실행됩니다.");
}, 3000);

console.log("clearTimeout 설정 이전");

clearTimeout(testTimerId); // 예약된 작업 취소

console.log("타이머가 취소되었습니다.");
// 3초 후에 실행됩니다. 출력되지 않음
