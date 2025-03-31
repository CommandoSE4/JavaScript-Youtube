// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser =
{
    email: "some@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname: "Avinash",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

/* 
Object.assign(obj1, obj2) //
 console.log(obj1); gives all values of 1 & 2
Object.assign({}, obj1, obj2)
  console.log(obj1); gives values of 1 only
 console.log(Object.assign({}, obj1, obj2)) both gives same
 console.log(Object.assign(obj1, obj2)) both gives same 1 & 2
*/

// const obj3 = Object.assign({}, obj1, obj2)  //it stores data in empty object{}, without{} it will
                                               //store and change the data in obj1
                                               
const obj3 = {...obj1, ...obj2}              
// console.log(obj3);

const users =
[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
