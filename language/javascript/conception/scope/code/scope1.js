var x = "global";

function testFunc() {
  var x = "local";
  console.log(x);
}

testFunc(); // Output: 'local'
console.log(x); // Output: 'global'
