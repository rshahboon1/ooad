const { Person, Student, Teacher } = require("./class/Classes");

let Ahmed = new Person("ahmed ali", 28, "Male");

console.log(Ahmed.getInfo().name);

let mohameed = new Student(["mohamed ", 23, "male"], "zawiah uni");

console.log(mohameed.getCollageName());
const MamodeAlakrimi = new Teacher(
  ["Mahmoud il akrimi", 37, "male", "Azawia uni"],
  "ooad"
);

console.log(MamodeAlakrimi.getSubjectName());
