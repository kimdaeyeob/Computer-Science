class Unit {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  attackEnemy(enemy) {
    enemy.hp -= this.attack;
  }
}

/**
 * * 상속
 */
class Hero extends Unit {
  constructor(name, hp, attack) {
    super(name, hp, attack); // 부모 클래스의 생성자 메서드 호출
    this.maxHp = hp; // 추가 속성
  }

  attackEnemy(enemy) {
    super.attackEnemy(enemy); // 부모 클래스의 메서드 호출
  }

  heal() {
    // 부모 클래스 메서드 외 동작
    this.hp = this.maxHp;
  }
}

const hero1 = new Hero("hero", 100, 10);
const enemy1 = new Unit("enemy", 50, 5);

hero1.attackEnemy(enemy1);
console.log(enemy1.hp); // 40

console.log(hero1.hp); // 100
hero1.hp = 50; // 체력 감소
console.log(hero1.hp); // 50
hero1.heal();
console.log(hero1.hp); // 100
