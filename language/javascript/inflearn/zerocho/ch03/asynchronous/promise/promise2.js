// const timerId = setTimeout(() => {
//   console.log("0초 뒤에 실행 ");
// }, 0);

const setTimeoutPromise = new Promise((resolve, reject) => {
  const timerId = setTimeout(() => {
    resolve("0초 뒤에 실행 ");
  }, 0);
});

setTimeoutPromise.then((message) => {
  console.log(message);
});
