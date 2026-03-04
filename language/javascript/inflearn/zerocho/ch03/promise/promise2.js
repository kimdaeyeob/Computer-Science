const p1 = new Promise((resolve, reject) => {
  resolve("success");
});

p1.then((data) => console.log(data));

const p2 = new Promise((resolve, reject) => {
  reject("fail");
});

p2.catch((error) => console.log(error));
