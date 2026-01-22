class Unit {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.maxHp = hp; // 최대 체력
  }
}

class HeroUser extends Unit {
  constructor(name, hp, attack) {
    super(name, hp, attack);
    this.shouting(); // 생성자에서 메서드 호출
  }

  shouting() {
    console.log(`${this.name}님이 외칩니다! 아자자자잦`);
  }
}

const ironMan = new HeroUser("아이언맨", 100, 10);
// console.log(ironMan.shouting());
