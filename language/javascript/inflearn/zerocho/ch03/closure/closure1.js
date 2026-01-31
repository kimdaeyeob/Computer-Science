/**
 * * 클로저 > 외부 값에 접근하는 함수
 */

const b = 11;
const func = () => {
  console.log(b);
};

func(); // func함수는 클로저다. func함수는 외부에 있는 b 변수에 접근할 수 있다.

/**
 * * 클로저 (반환값인 익명함수가 외부의 message라는 매개변수를 사용)
 * @param {*} message
 * @returns
 */
const func2 = (message) => {
  return () => {
    console.log(message);
  };
};

const innerFunc = func2("hello closure!");
innerFunc(); // hello closure!
