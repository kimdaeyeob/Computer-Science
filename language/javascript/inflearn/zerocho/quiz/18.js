const obj = {
  a: "hello",
  b: {
    c: "hi",
    d: { e: "wow" },
  },
};

const { a, b } = obj;
const { c, d } = b;
const { e } = d;

console.log(a); // "hello"
console.log(c); // "hi"
console.log(e); // "wow"

const obj2 = {
  a2: "hello",
  b2: {
    c2: "hi",
    d2: { e2: "wow" },
  },
};

const {
  a2,
  b2: {
    c2,
    d2: { e2 },
  },
} = obj2;

console.log(a2); // "hello"
console.log(c2); // "hi"
console.log(e2); // "wow"
