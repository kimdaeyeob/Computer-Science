/**
 * * prototype > 생성자 함수로 생선한 객체가 공유하는 속성
 * * prototype 속성안에 메서드를 추가해야 메서드를 재사용할 수 있음
 */
function Monster(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

Monster.prototype.attackingMonster = function (target) {
  target.hp -= this.attack;
};

const monster1 = new Monster("슬라임", 10, 2);
const monster2 = new Monster("스켈레톤", 20, 4);

console.log("전:", monster1, monster2);

monster1.attackingMonster(monster2);
monster2.attackingMonster(monster1);

console.log("후:", monster1, monster2);

/**
 * * Test
 */

console.log("monster1: ", monster1); // monster1:  Monster { name: '슬라임', hp: 6, attack: 2 }
