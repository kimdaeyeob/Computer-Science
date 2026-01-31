/**
 * * 함수는 lexical scope를 따른다 (함수가 선언된 위치에 따라 접근할 수 있는 값이 달라지는 현상) > JS는 정적 스코프를 따름.
 * ! const는 블록 레벨 스코프, closureFunc는 if문 밖에 정의되어 있으므로
 * ! closureFunc가 호출될 때 outerVariable은 정의되지 않아 ReferenceError가 발생합니다.
 */
const closureFunc = () => {
  console.log("변수에 접근하여 값 출력: ", outerVariable);
};

if (true) {
  const outerVariable = 20;
  closureFunc();
}
