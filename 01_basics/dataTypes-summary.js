// JS is dynamically types, type is defined during runtime

// Primitive

// 7 types: String, Number, Boolean, null, undefined, BigInt

score = 100                 //number
score = 100.1               //number

const isLoggedIn = false    //boolean
const outsideTemp = null    //object
let userEmail;              //undefined

const id = Symbol('123')    //symbol
const anotherId = Symbol('123') //symbol

console.log(id === anotherId);  

const bigNumber = 6546848416521246584n  //bigint

// Reference (non-Primitive)

const heros = ["shaktiman", "Naagraj", "Doga"]; //object
let myObj =                             //object
{
    name: "Avinash",
    age: 20,
}

const myFunction = function()           //object function
{
    console.log("Hello World");
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/******-------===++++++++++++++===--------********/

// Stack (Primitive), Heap (Non-Primitive)
//       (Copy value)      (Reference value)
let myYoutubeName = "hiteshchoudharydotcom"
let anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne =
{
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "avinash@google.com"

console.log(userOne.email);
console.log(userTwo.email);
