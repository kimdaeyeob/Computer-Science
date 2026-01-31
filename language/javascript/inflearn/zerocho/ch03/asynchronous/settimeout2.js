/**
 * * 2초마다 실행되는 함수 만들기
 * ! 무한 재귀
 */
const callbackFunc = () => {
  console.log(`2초마다 실행됩니다.`);
  setTimeout(callbackFunc, 2000);
};

setTimeout(callbackFunc, 2000);
