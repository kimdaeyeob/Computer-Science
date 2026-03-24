document.querySelector("td").addEventListener(
  "click",
  (event) => {
    console.log("td");
    console.log("td의 event.target: ", event.target);
    console.log("td의 event.currentTarget: ", event.currentTarget);
  },
  true,
); // 캡처링 단계에서 이벤트가 발생하도록 설정

document.querySelector("tr").addEventListener(
  "click",
  (event) => {
    console.log("tr");
    console.log("tr의 event.target: ", event.target);
    console.log("tr의 event.currentTarget: ", event.currentTarget);
  },
  true,
);

document.querySelector("table").addEventListener(
  "click",
  (event) => {
    console.log("table");
    console.log("table의 event.target: ", event.target);
    console.log("table의 event.currentTarget: ", event.currentTarget);
  },
  true,
);
