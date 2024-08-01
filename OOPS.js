//Inheritance
class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Calls the parent class's constructor
      this.grade = grade;
    }
  
    study() {
      console.log(this.name + " is studying.");
    }
  }
  
  let bob = new Student("Bob", 20, "A");
  bob.greet(); // Output: Hello, Bob
  bob.study(); // Output: Bob is studying.

//Encapsulation
class Car {
    #brand; // Private field
  
    constructor(brand, model) {
      this.#brand = brand;
      this.model = model;
    }
  
    getBrand() {
      return this.#brand;
    }
  }
  
  let myCar = new Car("Toyota", "Corolla");
  console.log(myCar.getBrand()); // Output: Toyota
  console.log(myCar.#brand); // Error: Private field '#brand' must be declared in an enclosing class

//Polymorphism
class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Bark");
    }
  }
  
  let myDog = new Dog();
  myDog.makeSound(); // Output: Bark
  