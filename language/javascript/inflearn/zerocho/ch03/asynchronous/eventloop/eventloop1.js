const timerId = setTimeout(() => {
  console.log("0초뒤에 실행");
}, 0);

console.log("이 콘솔문이 먼저 실행됨");
clearTimeout(timerId);
