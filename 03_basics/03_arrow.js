const user =
{
    username: "Avinash",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

/*function one()
{
    let username ="Avinash"
    console.log(this);
    // console.log(this.username);
}*/

// one()

// const one = function()
// {
//     let username = "Avinash"
//     console.log(this.username);    
// }

const one = () => 
{
    let username = "Avinash"
    console.log(this);    
}

// one()

// const addTwo = (num1, num2) => 
// {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Avinash"})

console.log(addTwo(3, 4));