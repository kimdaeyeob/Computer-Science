/**
 * * 함수 선언문으로 함수를 선언한다면 this는 전역 객체를 가리킨다. (Node.js 환경에서는 global 객체, 브라우저 환경에서는 window 객체)
 */
const test1 = {
  name: "gildong",
  callingName() {
    const whatIsThis = function () {
      console.log(this);
    };
    whatIsThis();
  },
};

test1.callingName(); // global  (브라우저 환경에서는 window 객체)
