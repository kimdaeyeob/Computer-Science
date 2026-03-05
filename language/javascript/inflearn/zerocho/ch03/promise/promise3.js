const setTimeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 0);
});

setTimeoutPromise.then(() => {
  console.log("0초 뒤에 실행");
});
