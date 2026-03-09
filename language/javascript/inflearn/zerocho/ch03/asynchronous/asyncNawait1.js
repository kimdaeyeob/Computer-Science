/**
 * * await: promise가 resolve될 때까지 기다리게 하는 키워드
 *
 */
const setTimeoutPromise = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
console.log(setTimeoutPromise); // [Function: setTimeoutPromise]

await setTimeoutPromise(2000);
console.log("2초 후에 실행됩니다.");
console.log("추가로 실행됨");
