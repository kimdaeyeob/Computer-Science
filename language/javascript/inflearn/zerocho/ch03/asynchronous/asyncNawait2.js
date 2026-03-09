/**
 * ! promise가 아닌 것에는 await가 적용되지 않는다.
 */
await setTimeout(() => {
  console.log("2초 후에 실행");
}, 2000);

console.log("실행 테스트");
