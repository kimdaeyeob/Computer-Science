class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`제 이름은 ${this.name}입니다.`);
  }

  sayAge() {
    console.log(`제 나이는 ${this.age}살 입니다.`);
  }
}

class Programmer extends Human {
  constructor(name, age, availableLanguage) {
    super(name, age);
    this.availableLanguage = availableLanguage;
  }

  showAvailableLanguage() {
    console.log(`제가 할 수 있는 언어는 ${this.availableLanguage}입니다.`);
  }
}

const programmer1 = new Programmer("gil-dong", 28, "HTML, CSS, JavaScript");
console.log(programmer1);
programmer1.sayName();
programmer1.sayAge();
programmer1.showAvailableLanguage();
