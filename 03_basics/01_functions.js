
function sayMyName()
{
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2)
{
    /*let result = number1 + number2
    return result*/
    // console.log("Avinash");
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:",result);

// function loginUserMessage(username)
// {
//     if(username === undefined)
//     {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username="Sam")
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Avinash"))

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}

// console.log((calculateCartPrice(200, 400, 500)))

const user =
{
    username: "hitesh",
    price: 199
}

function handleObject(anyObject)
{
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject(
    {
        username: "Avinash",
        price: 399
    })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4]));