const $input = document.querySelector("input");
console.log("input값: ", $input.value); // input 태그의 value 속성값을 읽어온다. (빈 문자열이 출력된다.)

$input.value = "반갑습니다.";
console.log("input값: ", $input.value); // input 태그의 value 속성값을 변경한다. (반갑습니다.이 출력된다.)

$input.focus();
