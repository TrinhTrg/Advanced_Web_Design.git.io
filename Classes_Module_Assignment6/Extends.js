class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    constructor(name, age, id, major, className){
        super(name, age);
        this.id = id;
        this.major = major;
        this.className = className;
    }   
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Major: ${this.major}`;
        // console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Major: ${this.major}`);
    }
    getClassName(){
        return `Class Name: ${this.className}`;
        // console.log(`Class Name: ${this.className}`);
    }   
}
const student1 = new Student("Trinh", 20, "147", "Software Engineering", "SE22");
// another way to call method
// let myStudent = new Student("Trinh", 20, "147", "Software Engineering", "SE22");
// myStudent.getInfo();
// myStudent.getClassName();
console.log(student1.getInfo());
console.log(student1.getClassName());