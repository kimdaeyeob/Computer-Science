/**
 * * 객체 메서드로 this를 사용하면 this는 해당 객체를 가리킨다.
 */

const ex = {
  name: "gil-dong",
  age: 30,
  getName: function () {
    return this.name;
  },
};

console.log(ex.getName()); // gil-dong

/**
 * ! 메서드 내에서 구조 분해 할당을 사용하는 경우 this 바인딩이 깨질 수 있음. 객체.메서드()꼴로 사용해야 this가 객체 자신이 됨
 */

const { getName } = ex;
console.log(getName()); // undefined
