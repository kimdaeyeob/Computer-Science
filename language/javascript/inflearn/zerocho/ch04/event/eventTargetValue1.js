document.querySelector("button").addEventListener("click", onClickBtn);

const onInput = (event) => {
  console.log("입력된 글자 확인: ", event.target.value);
};

const $input = document.querySelector("input");
$input.addEventListener("input", onInput);
