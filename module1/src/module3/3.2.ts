{
  //Opp--inheritance
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHoure: number) {
      console.log(`${this.name} will sleep for ${numOfHoure}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("jahid", 20, "bangladesh");

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: string) {
      console.log(`${this.name} take class ${numberOfClass}`);
    }
  }
  const teacher = new Teacher("jahid", 20, "bangladesh", "profesor");
  console.log(teacher);
  teacher.takeClass("2");

  //
}
