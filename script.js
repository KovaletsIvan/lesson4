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
    console.log(
      this.fullName,
      "salary :",
      this.dayRate * this.workingDays * this.experience
    );
  }
}

var worker1 = new Worker("Ivan Kovalets", 55, 22);
var worker2 = new Worker("Jhon Jhonson", 40, 23);
var worker3 = new Worker("Tom Tomson", 34, 21);

console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

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
    console.log("Triangle - area: ", s);
  }
}

class Square extends GeometricFigure {
  constructor(c) {
    super();
    this.c = c;
  }
  getArea() {
    var s = Math.pow(this.c, 2);
    console.log("Square - area: ", s);
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
    console.log("Circle - area: ", s);
  }
}

var square = new Square(7);
square.getArea();

var triangle = new Triangle(4, 5);
triangle.getArea();

var circle = new Circle(5);
circle.getArea();

/*function handelFigures(figures) {

   
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];*/
