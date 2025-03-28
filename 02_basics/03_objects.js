//singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser =
{
    name: "Avinash",
    [mySym]: "myKey1",
    "full name": "Avinash Sharma",
    age: 20,
    location: "Bhopal",
    email: "avinash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "avinash@chatgpt.com"
console.log(JsUser.email);

// Object.freeze(JsUser)   // after freezing nothing can be done inside
JsUser.email = "avinash@microsoft.com"

console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS User, ${this.name}`);
}

JsUser.greeting()
console.log(JsUser.greeting)
JsUser.greetingTwo()