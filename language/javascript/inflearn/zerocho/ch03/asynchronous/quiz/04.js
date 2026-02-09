/**
 * * 콘솔에 어떤 순서대로 출력되는지 콜스택과 이벤트 루프를 사용하여 서술
 */
function ex4() {
  setTimeout(() => {
    console.log("라");
  }, 0);

  console.log("다");

  setTimeout(() => {
    console.log("가");
    ex4();
  }, 0);

  setTimeout(() => {
    ex4();
    console.log("나");
  }, 0);
}

ex4();
