// setTimeoutPromise(0)
//   .then(() => {
//     return "a";
//   })
//   .then((data1) => {
//     console.log(data1);
//     return "b";
//   })
//   .then((data2) => {
//     console.log(data2);
//   });

const setTimeoutPromise = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });

const run = async () => {
  await setTimeoutPromise(0);
  const data1 = "a";
  console.log(data1);
  const data2 = "b";
  console.log(data2);
};

run();
