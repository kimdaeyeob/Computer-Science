/**
 * * promise가 resolve나 reject되는 순간 then이나 catch에 등록된 콜백 함수가 태스크 큐에 들어가게 된다.
 * ! 태스크 큐에 있는 프로미스 콜백 함수는 프로미스가 아닌 일반 콜백 함수보다 먼저 콜 스택에 들어가게 된다.
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("셋 타임 아웃 실행");
  }, 1000);
  resolve();
});

promise.then(() => {
  console.log("프로미스 콜백 함수 실행");
});
