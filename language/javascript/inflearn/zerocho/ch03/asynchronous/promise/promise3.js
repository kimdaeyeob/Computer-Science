const setTimeoutPromise = (delayMilliSec) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delayMilliSec);
  });

setTimeoutPromise(2000).then(() => {
  console.log("2초 뒤에 실행 ");
});
