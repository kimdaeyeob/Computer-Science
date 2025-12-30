const obj1 = {
  log: function () {
    console.log("obj1 log");
  },
};

obj1.log(); // obj1 log

const obj2 = {
  log(val) {
    console.log("obj2 log의 값: ", val);
  },
};

obj2.log(100); // obj2 log의 값:  100
