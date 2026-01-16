/**
 * * 클래스로 객체 생성
 */

// function Monster(name, hp, attack) {
//   this.name = name;
//   this.hp = hp;
//   this.attack = attack;
// }

// 클래스로 변경
/**
 * * class예약어로 클래스를 선언 & 생성자 함수명을 클래스명으로 삽입
 */
class Monster {
  constructor(name, hp, attack) {
    // 생성자 함수
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }
}

/**
 * * new ClassName() 형태로 호출 > 생성자 함수가 실행되고 객체가 반환됨
 */
const monster1 = new Monster("슬라임", 100, 10);
const monster2 = new Monster("오크", 200, 20);

console.log(monster1); // Monster { name: '슬라임', hp: 100, attack: 10 }
console.log(monster2); // Monster { name: '오크', hp: 200, attack: 20 }
