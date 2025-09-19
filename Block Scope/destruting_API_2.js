//combine or merge two objects 
const user = {
    'name': "An",
    'id': 1,
};
const details = {
    'age': 20,
    'email': "an@example.com"
};
const mergedObject = { ...user, ...details };
console.log(mergedObject); // { name: "An", age: 20, email: "an@example.com" }