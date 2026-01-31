const numbers = [1, 3, 5, 7, 9];

for (var i = 0; i < numbers.length; i++) {
  setTimeout(
    () => {
      console.log(numbers[i]);
    },
    1000 * (i + 1),
  );
}
