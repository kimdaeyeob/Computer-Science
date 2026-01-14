/**
 * * 함수의 this는 bind() 메서드를 사용해서 값을 바꿀 수 있음
 * ! bind() 메서드는 자바스크립트에 내장된 메서드로 this를 수정하는 역할을 수행함
 */
const obj = { name: "gildong" };
function a() {
  console.log(this);
}

a(); // global object
a.bind(obj)(); // { name: "gildong" }

/**
 * !
 */
const b = () => {
  console.log(this);
};

b.bind(obj)(); // global object

/**
 * * bind() 메서드는 화살표 함수의 this를 변경하지 못함
 * ! 화살표 함수는 자신만의 this를 가지지 않기 때문
 * * this가 외부 요인으로 인해 바뀌는 것을 원치않는 경우 함수 선언문 대신 화살표 함수를 사용해야 함
 */

const c = {
  name: "gildong",
  callingName() {
    const checkingThis = () => {
      console.log(this);
    };
    checkingThis();
  },
};

c.callingName(); // { name: 'gildong', callingName: [Function: callingName] }

/**
 * * * 화살표 함수는 상위 스코프의 this를 그대로 가져옴
 * ! 따라서 화살표 함수 내부에서 this를 사용할 때는 상위 스코프의 this가 무엇인지 항상 염두에 두어야 함
 */
