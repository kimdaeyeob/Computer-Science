/**
 * ! 1000*(i+1)과  console문을 다른 시점에 실행된다
 */

const nums = [1, 3, 5, 7, 9];
for (var i = 0; i < nums.length; i++) {
  setTimeout(
    () => {
      console.log(`index: ${i}, value: ${nums[i]}`);
    },
    1000 * (i + 1),
  );
}
