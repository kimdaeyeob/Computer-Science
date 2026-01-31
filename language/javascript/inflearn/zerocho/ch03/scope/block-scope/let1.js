/**
 * * let > 블록레벨 스코프를 가짐
 * ! 블록레벨 스코프 > { } 중괄호 안에서만 유효한 범위를 가짐
 */

if (true) {
  let example = 20;
}

console.log(example); // ReferenceError: example is not defined
