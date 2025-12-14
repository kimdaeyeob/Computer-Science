const arr = ["가", "라", "다", "라", "마", "라"];

// console.log(arr.indexOf("라"));
const idxOfStr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "라") {
    idxOfStr.push(i);
  }
}

console.log(idxOfStr);
