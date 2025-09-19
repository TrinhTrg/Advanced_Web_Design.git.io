function testScope(name, age) {
    console.log(`Xin chào ${name}, ${age} tuổi.`);
}
//testScope("An", 20);

// Arrow function
var hello = ()=>{
    console.log("Hello arrow function");
}

//hello();
//Es6 arrow function
var hello2 = (name, age)=>{
    console.log(`Hello ${name}, ${age} tuổi.`);
}
var name = "An";
var age = "20";
//hello2(name, age);

//kiểm tra số chẵn hay lẻ
var Number = ()=>{
    for ( let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i + " là số chẵn");
        } else {
            console.log(i + " là số lẻ");
        }
}
}
//Number();

// kiểm tra số nguyên tố
var checkPrime = (n)=>{
    if (n < 2) {
        console.log(n + " không phải số nguyên tố");
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { // kiểm tra từ 2 đến căn bậc hai của n
        if (n % i == 0) {
            console.log(n + " không phải số nguyên tố");
            return;
        }   
    }
    console.log(n + " là số nguyên tố");
}
checkPrime(7);
checkPrime(10);
checkPrime(1);

// destructuring assignment in ES6
var person = ["hello", "I", "am", "An"];
var [a, b, c, d] = person;
console.log(a); // hello
console.log(b); // I
console.log(c); // am
console.log(d); // An
var [a, , , d] = person; // bỏ qua phần tử thứ 2 và 3
console.log(a);
console.log(d);
var [a, ...intro] = person; // intro là mảng chứa các phần tử còn lại (assigning the rest of the array )
console.log(a);
console.log(intro); // ["I", "am", "An"]

// destructuring assignment with objects
const student = {
    name: "An",
    age: 20,
};
const {name: name1, age: age1} = student; // destructuring assignment
console.log(name1); // An
console.log(age1);

// destructuring assignment with objects and arrays
const student1 = [
    {
        'name': "An",
        'age': 20,
    },
    {
        'name': "Bình",
        'age': 21,
    },
    {
        'name': "Cường",
        'age': 22,
    }
];
for(s in student1){
    console.log(student1[s]);
}
// another way to destructure
for(let {name, age} of student1){
    console.log(`Name: ${name} is ${age} years old.`);
}
// another example to run
const clone = {...student1}
console.log(student1)

