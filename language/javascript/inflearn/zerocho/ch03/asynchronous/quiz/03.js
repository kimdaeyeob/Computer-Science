const sayHello = () => {
  console.log("hello");
  setTimeout(sayHello, 1000);
};

setTimeout(sayHello, 1000);
