const errorHandling = new Promise((resolve, reject) => {
  reject("에러 발생");
});

// await errorHandling;
try {
  await errorHandling;
} catch (error) {
  console.log(error);
}
