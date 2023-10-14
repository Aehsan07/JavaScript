//primitive
//Number, BigInt, String, Boolean, Null, Undefined, Symbol

const score = 100
const scoreValue = 0.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const Id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(Id === anotherId);

//Reference (Non primitive)
//Object, Array, Functions

const heros = ["Iron-Man", "Hulk", "Thor", "Ant-Man"];

let myObj = {
             Name: "Aehsan",
             Age: 29,
            }

const myFunction = function(){
        console.log("Hello World");
}

//*******************Memory******************************/

//Stack (Primitive), Heap(Non Primitive)

let myVar = "TakeThisValue"
let anotherVar = myVar
anotherVar = 'UpdateValue'

console.log(myVar);
console.log(anotherVar);

let userOne = {
    email: "aehsan.shaikh@gmail.com",
    upi: "aehsan.shaikh@hdfc"
}

let userTwo = userOne;

userTwo.email = "aehsan.shaikh@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);