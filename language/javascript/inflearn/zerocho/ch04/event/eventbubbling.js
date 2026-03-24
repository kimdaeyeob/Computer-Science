document.querySelector("td").addEventListener("click", () => {
  console.log("td를 클릭함");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

document.querySelector("tr").addEventListener("click", () => {
  console.log("tr을 클릭하였습니다");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

document.querySelector("table").addEventListener("click", () => {
  console.log("table을 클릭함");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});
