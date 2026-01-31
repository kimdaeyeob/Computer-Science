/**
 * * var 키워드로 선언한 변수는 함수 레벨 스코프를 갖는다.
 * * * 함수 레벨 스코프는 함수 내에서 선언한 변수는 함수 내에서만 유효하다.
 * ! 함수 바깥에서는 접근할 수 없고, 함수가 끝날 때 함수 내부 에서 선언한 모든 변수는 메모리에서 해제됨
 */

function functionLevelFunc() {
  var functionLevelVar = "function level var";
}

console.log("var 키워드로 선언된 변수 확인 ", functionLevelVar); // ReferenceError: functionLevelVar is not defined
