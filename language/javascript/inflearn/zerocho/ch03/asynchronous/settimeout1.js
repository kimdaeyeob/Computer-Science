/**
 * * setTimeout(func, delay(ms))
 * ! setTimeout 내부에 작성된 함수는 비동기 코드가 모두 실행되고 나서 실행
 */

setTimeout(() => {
  console.log("3초 후에 실행됩니다.");
}, 3000);

console.log("setTimeout() 호출 후 바로 실행됩니다.");
