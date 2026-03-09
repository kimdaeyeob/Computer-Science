const setTimeoutPromise = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });

function run() {
  await setTimeoutPromise(2000); // Error: await is only valid in async functions and the top level bodies of modules
  console.log("2초 후에 실행됩니다.");
  console.log("추가로 실행됨");
}

run();
