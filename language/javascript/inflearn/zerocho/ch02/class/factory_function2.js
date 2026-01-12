function createMonstrer(name, hp, attack) {
  return {
    name,
    hp,
    attack,

    attackingMonster(target) {
      target.hp -= this.attack;
    },
  };
}

const monster1 = createMonstrer("슬라임", 10, 2);
const monster2 = createMonstrer("스켈레톤", 20, 4);

console.log("전:", monster1, monster2);

monster1.attackingMonster(monster1);
monster2.attackingMonster(monster2);

console.log("후:", monster1, monster2);

// 출력 결과
// 전: { name: '슬라임', hp: 10, attack: 2 } { name: '스켈레톤', hp: 20, attack: 4 }
// 후: { name: '슬라임', hp: 10, attack: 2 } { name: '스켈레톤', hp: 18, attack: 4 }
