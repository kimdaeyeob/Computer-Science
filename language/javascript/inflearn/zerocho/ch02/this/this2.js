function Monster(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

/**
 * * new 키워드 없이 생성자 함수를 호출하면 > this는 전역 객체를 가리킨다.
 */
const monster1 = Monster("슬라임", 10, 2);
console.log(monster1); // undefined
console.log("global name:", global.name); // global name: 슬라임
console.log("global hp:", global.hp); // global hp: 10
console.log("global attack:", global.attack); // global attack: 2

/**
 * * Vscode 환경에서는 > this가 전역 객체를 가리키지 않음 > strict mode가 기본 적용되어 있기 때문
 * * 브라우저 환경에서 실행할 경우 > this는 전역 객체(window)를 가리킴
 * ! 여기서는 error가 발생함
 */
console.log("window.name:", window.name); // window.name: 슬라임
console.log("window.hp:", window.hp); // window.hp: 10
console.log("window.attack:", window.attack); // window.attack: 2
