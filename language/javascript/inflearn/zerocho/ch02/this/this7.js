/**
 * * 클래스 > 객체의 속성과 메서드를 하나로 묶는 틀
 */

class Monster {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  attackingTarget(target) {
    target.hp -= this.attack;
  }
}

const goblin = new Monster("고블린", 100, 10);
const orc = new Monster("오크", 200, 20);

console.log(goblin);
console.log(orc);

goblin.attackingTarget(orc);
console.log(orc);

orc.attackingTarget(goblin);
console.log(goblin);
