const a = {
  name: "강아지",
};

const b = a;
const c = b;

b.name = "고양이";
console.log(b);
console.log(c);
