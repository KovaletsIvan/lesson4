// Task 1

var mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};

mentor.academy = "SoftServ"; // adding value
mentor.city = "lviv";

function propsCount(currentObject) {
  var array = Object.keys(currentObject);
  console.log(array.length);
}

propsCount(mentor);

console.log(mentor);

// Task 2

function showProps(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

showProps(mentor);

// Task 3

class Worker {
  experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  get experience() {
    return this._experience;
  }

  set experience(experience) {
    this.experience = experience;
  }

  showSalary() {
    console.log(this.fullName, "salary :", this.dayRate * this.workingDays);
  }

  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this.experience;
  }
}

var worker1 = new Worker("Jhon Jhonson", 40, 23);
var worker2 = new Worker("Tom Tomson", 34, 21);
var worker3 = new Worker("Ivan Kovalets", 55, 22);

console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName, "salary :", worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName, "salary :", worker1.showSalaryWithExperience());

console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName, "salary :", worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName, "salary :", worker2.showSalaryWithExperience());

console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName, "salary :", worker3.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName, "salary :", worker3.showSalaryWithExperience());

var arrWorkers = [
  (work1 = {
    name: worker1.fullName,
    salary: worker1.showSalaryWithExperience()
  }),
  (work2 = {
    name: worker2.fullName,
    salary: worker2.showSalaryWithExperience()
  }),
  (work2 = {
    name: worker3.fullName,
    salary: worker3.showSalaryWithExperience()
  })
];
console.log(arrWorkers);
arrWorkers.sort(function(a, b) {
  return a.salary - b.salary;
});
function sortSalary(arrWorkers) {
  for (var i = 0; i < arrWorkers.length; i++) {
    console.log(arrWorkers[i].name, " ", arrWorkers[i].salary);
  }
}

sortSalary(arrWorkers);
// Task 4

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    console.log(this.surname + " ", this.name + " ", midleName);
  }
  showCors() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var cors = currentYear - this.year;
    if (cors < 0) {
      console.log("This Person is not a tudent yet!");
    } else if (cors == 0) {
      console.log("Curent Cors: ", 1);
    } else if (cors > 6) {
      console.log("The Student head olreadey Graduate!");
    } else {
      console.log("Current Cors: ", cors);
    }
  }
}
var student1 = new Student("Ivan", "Ivanov", 2020);

student1.showFullName("Ivanovich");

console.log(student1.year);

student1.showCors();

// Task 5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  getArea() {
    var s = (this.a * this.b) / 2;
    return s;
  }
}

class Square extends GeometricFigure {
  constructor(c) {
    super();
    this.c = c;
  }
  getArea() {
    var s = Math.pow(this.c, 2);
    return s;
  }
}

class Circle extends GeometricFigure {
  constructor(d) {
    super();
    this.d = d;
  }
  getArea() {
    var s = Math.pow(this.d, 2);
    s = s * 3.14;
    return s;
  }
}

function handleFigures(figures) {
  var sumArea = 0;
  for (var i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure) {
      sumArea += figures[i].getArea();
    }
    console.log(
      "Geometric Figure: ",
      figures[i].toString(),
      " ",
      figures[i].getArea()
    );
    console.log(sumArea);
  }
}

var figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
