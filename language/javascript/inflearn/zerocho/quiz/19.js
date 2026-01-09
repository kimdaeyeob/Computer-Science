const arr = [1, 3, 5, 7];
arr.forEach((num, index) => {
  console.log(num, index);
});

/**
 * * for 변환
 */
console.log("--- for 변환 ---");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}
