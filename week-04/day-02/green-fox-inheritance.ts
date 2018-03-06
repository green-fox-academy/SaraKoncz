'use strict';
class Person {
  name: string;
  age: number;
  gender: string;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`)
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'School of Life') {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
  }
  getGoal() {
    console.log('My goal is: be a junior software developer.');
  }
  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  level: string;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
  getGoal() {
    console.log('My goal is: educate brilliant junior software developers');
  }
  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
  }
  getGoal() {
    console.log('My goal is: hire brilliant junior software developers.');
  }
  hire() {
    this.hiredStudents++;
  }
  constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
  }
}

class Cohort {
  name: string;
  students: string[];
  mentors: string[];

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }

  constructor(name: string, students: string[] = [], mentors: string[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
}


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();