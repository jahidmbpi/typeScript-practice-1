{
  //instance of groud
  class Animal {
    name: string;
    spacies: string;
    constructor(name: string, spacies: string) {
      this.name = name;
      this.spacies = spacies;
    }
    makeSound() {
      console.log(`i am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, spacies: string) {
      super(name, spacies);
    }
    makeBrug() {
      console.log(` i am burging `);
    }
  }

  class Cat extends Animal {
    constructor(name: string, spacies: string) {
      super(name, spacies);
    }
    makeMeaw() {
      console.log(` i am mawaing `);
    }
  }

  const dog = new Dog("dog bhai", "dog");

  const cat = new Cat("cat bhai", "cat");
  // smart way te handele korte chaile amr function use korte pari

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBrug();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };
  getAnimal(dog);

  //
}
