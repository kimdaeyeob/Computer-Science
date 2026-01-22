/**
 * * 상속
 */

class HeroUser {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    // 최대 체력
    this.maxHp = hp;
  }

  attackEnemy(enemy) {
    enemy.hp -= this.attack;
    console.log(`${this.name}님이 ${enemy.name}님을 공격하였습니다.`);
  }

  heal() {
    this.hp = this.maxHp;
    console.log(`${this.name}님의 체력이 모두 회복되었습니다.`);
  }
}
