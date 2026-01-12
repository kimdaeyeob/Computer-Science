/**
 * * factory function > 객체를 반환하는 함수
 * @param {*} name
 * @param {*} hp
 * @param {*} attack
 * @returns
 */
function createMonster(name, hp, attack) {
  return { name, hp, attack };
}

const monster1 = createMonster("슬라임", 10, 2);
const monster2 = createMonster("스켈레톤", 20, 4);

console.log(monster1); // { name: '슬라임', hp: 10, attack: 2 }
console.log(monster2); // { name: '스켈레톤', hp: 20, attack: 4 }

console.log();
