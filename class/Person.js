class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getInfo = _ => {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender
    };
  };
}

class Student extends Person {
  constructor(props, collage) {
    super(...props);
    this.collage = collage;
  }
  getCollageName = () => {
    return this.collage;
  };
}
class Teacher extends Student {
  constructor(props, subject) {
    super(...props);
    this.subject = subject;
  }
  getSubjectName = _ => {
    return this.subject;
  };
}

module.exports = {
  Person,
  Student,
  Teacher
};
