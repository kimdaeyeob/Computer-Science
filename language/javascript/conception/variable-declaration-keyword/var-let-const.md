# var

var 키워드로 선언도니 변수는 같은 스코프 내에서 중복 선언이 허용된다. <br/>이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.

```js
function foo() {
  var x = 2;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
  // 아래 변수 선언문은 JS 엔진에 의해 var 키워드가 없는 것처럼 동작함
  var x = 3;
  console.log(x);
}

foo(); // 3
```

하지만 **let**이나 **const** 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.

```js
function bar() {
  let x = 2;
  // let, const로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않음

  let x = 5;
}

bar(); // Uncaught SyntaxError: Identifier 'x' has already been declared
```
