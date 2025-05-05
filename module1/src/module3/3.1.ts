{
  // class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("german shepard bhai", "dog", "ghew ghew");
  const cat = new Animal("bilai bhai", "cat", "meaw meaw");
  dog.makeSound();
  cat.makeSound();
  console.log("hello");

  //
}
