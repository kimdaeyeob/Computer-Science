const arr = [1, 2, 1, 3, 3, 5];
const arrManipulatedBySet = new Set(arr);
console.log(arrManipulatedBySet); // Set { 1, 2, 3, 5 }
console.log(arrManipulatedBySet.size); // 4

// Set을 배열로 변환
const uniqueArr = [...arrManipulatedBySet];
console.log(uniqueArr); // [ 1, 2, 3, 5 ]

const anotherUniqueArr = Array.from(arrManipulatedBySet);
console.log(anotherUniqueArr); // [ 1, 2, 3, 5 ]

console.log(Array.from("1234135"));
