const emptyArr = Array(5);
console.log(emptyArr); // [ <5 empty items> ]
console.log(emptyArr.fill()); // [ undefined, undefined, undefined, undefined, undefined ]
console.log(emptyArr.fill(0)); // [ 0, 0, 0, 0, 0 ]

/**
 * fill 메서드는 배열을 특정 값으로 채우는 역할을 한다.
 * 빈 배열에 fill 메서드를 사용하면 undefined 값으로 채워진다.
 * fill 메서드는 기존 배열을 변경한다.
 * 따라서 빈 배열을 만들고 fill 메서드를 사용하여 값을 채운 후,
 * map 메서드를 사용하여 인덱스 값을 이용해 새로운 값을 생성할 수 있다.
 */
const arr = Array(10);
const arr2 = arr.fill().map((v, i) => i + 1);

console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
