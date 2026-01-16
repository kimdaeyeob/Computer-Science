/**
 * * this 활용
 * ! 객체 내부의 this를 활용하여 데이터 값을 가져옴
 * ! 객체가 생성될 때 저장된 상태 값에 의존
 * ! this가 필수적임 (내부 데이터를 사용하기 때문)
 */

class HumanByThis {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printingName() {
    console.log(this.name);
  }

  printingAge() {
    console.log(this.age);
  }
}

/**
 * * 매개변수 활용
 * ! 함수 호출시 전달받은 값인 인자에서 데이터 값을 가져옴
 * ! 그때그때 넘겨주는 값에 의존
 * ! this가 필요없음 (외부에서 값을 받기 때문)
 */
class HumanByParam {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printingName(name) {
    console.log(name);
  }

  printingAge(age) {
    console.log(age);
  }
}
