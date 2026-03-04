/**
 * * 함수가 호출 스택의 최대 크기보다 더 쌓이게 만드는 방법 > 비동기 함수 사용
 */

let i = 0;
function recurse() {
  i++;
  if (i > 20000) {
    return;
  }

  setTimeout(recurse, 0);
}
