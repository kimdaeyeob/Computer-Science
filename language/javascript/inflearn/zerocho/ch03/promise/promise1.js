/*
const <promise object> = new Promise((resolve, reject) => {
  resolve() // 프로미스 성공 케이스일떄 호출
    reject() // 프로미스 실패 케이스일떄 호출
})

// 프로미스 객체에 then() 메서드나 catch() 메서드를 붙임
<promise object>.then(<callback function>) 또는 <promise object>.catch(<callback function>)
*/

// resolve로 전달된 값은 then() 콜백 함수의 매개변수로 전달됨.
const p1 = new Promise((resolve, reject) => {
  resolve("success");
});

p1.then((data) => console.log(data)); // success

// reject() 인수로 전달한 값은 catch() 콜백 함수의 매개변수로 전달됨
const p2 = new Promise((resolve, reject) => {
  reject("fail");
});

p2.catch((data) => console.log(data)); // fail
