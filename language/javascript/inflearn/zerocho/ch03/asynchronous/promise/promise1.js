/**
 * * resolve : 작업이 성공했을 때 호출, reject: 작업이 실패했을 때 호출 > JS 자체 제공하는 콜백
 * * resolve(value) > 작업이 성공했을 때 결과를 나타내는 value 전달
 * * reject(error) > 작업이 실패했을 때 오류를 나타내는 error 전달
 * * new Promise 생성자가 반환하는 promise 객체는 state, result 프로퍼티를 가짐
 */
const promise = new Promise(function (resolve, reject) {
  // executor (실행 함수) > new Promise가 만들어질 때 자동으로 실행
  // 비동기 작업 수행
  resolve("result"); // 작업이 성공했을 때 호출
  reject(new Error("error occurred")); // 작업이 실패했을 때 호출
});

promise
  .then((value) => {
    // promise 객체의 상태가 fulfilled(이행)일 때 호출되는 콜백 함수 등록
    console.log(value); // 'result'
  })
  .catch((error) => {
    // promise 객체의 상태가 rejected(거부)일 때 호출되는 콜백 함수 등록
    console.error(error);
  });
