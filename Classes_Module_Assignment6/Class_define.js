class MyClass {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
  myMethod() {
    return(`Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Address: ${this.address}`)
    // the another way to do this is:
    // console.log(`Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Address: ${this.address}`);
  }
}
const obj1 = new MyClass("Alice", 30, "123-456-7890", "123 Main St");
const obj2 = new MyClass("Bob", 25, "987-654-3210", "456 Elm St");
console.log(obj1.myMethod());
console.log(obj2.myMethod());
// obj1.myMethod();
// obj2.myMethod();