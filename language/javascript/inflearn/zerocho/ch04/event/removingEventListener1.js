function onClickButton() {
  console.log("버튼이 클릭되었습니다.");
}
const $btn = document.querySelector("#button");
$btn.addEventListener("click", onClickButton);

// background에서도 이벤트 리스너 제거
$btn.removeEventListener("click", onClickButton);
