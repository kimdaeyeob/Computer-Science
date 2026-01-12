/**
 * * 생성자 함수(constructor function) > new를 붙여서 객체를 생성하는 함수
 * @param {*} name
 * @param {*} hp
 * @param {*} attack
 */

// 생성자 함수는 대문자로 시작하는 것이 관례
function Monster(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

const monster1 = new Monster("슬라임", 10, 2);
const monster2 = new Monster("스켈레톤", 20, 4);

console.log(monster1);
console.log(monster2);

// 출력 결과
// Monster { name: '슬라임', hp: 10, attack: 2 }
// Monster { name: '스켈레톤', hp: 20, attack: 4 }
