const a = "b";
const c = ["d", true, 1];
const e = { g: "h" };
const i = [{ j: "k" }, { l: "m" }];
const n = { o: { p: "q" } };

console.log(a);
console.log(c);
console.log(e);
console.log(i);
console.log(n);

/**
 * 복사
 */

const a2 = a;
const c2 = c.slice();
const e2 = { ...e };
const i2 = JSON.parse(JSON.stringify(i));
const n2 = JSON.parse(JSON.stringify(n));

console.log(a2);
console.log(c2);
console.log(e2);
console.log(i2);
console.log(n2);
