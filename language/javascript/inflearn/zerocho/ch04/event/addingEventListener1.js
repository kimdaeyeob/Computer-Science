/**
 * * tag.addEventListener('event name', callback function)
 * ! 이벤트 리스너는 이벤트가 발생할 때마다 지정된 콜백 함수를 실행하는 장치
 * ! 이벤트 리스너는 여러 개 등록할 수 있음
 * ! 이벤트 리스너는 이벤트가 발생한 요소에 등록해야 함
 */

const onClickBtn = () => {
  console.log("버튼이 클릭됨");
};

const $btn = document.querySelector("button");
$btn.addEventListener("click", onClickBtn);
