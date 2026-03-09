/**
 * * 앞선 then() 콜백 메서드의 반환값은 다음 then() 콜백 메서드의 매개변수로 전달됨
 */

const setTimeoutPromise = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });

const promiseEx = setTimeoutPromise(0);

promiseEx
  .then(() => {
    return "1차 성공";
  })
  .then((message) => {
    console.log(message);
    return "2차 성공";
  })
  .then((message) => {
    console.log(message);
  });

const promiseEx2 = setTimeoutPromise(2000);
promiseEx2
  .then(() => {
    console.log("2초 뒤에 실행");
  })
  .catch((err) => {
    console.log("에러 발생");
  })
  .finally(() => {
    console.log("성공/실패 여부와 상관없이 무조건 실행");
  });
