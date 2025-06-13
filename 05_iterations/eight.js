const myNums = [1, 2, 3]

/*const myTotal = myNums.reduce( function(acc, currval) 
                                {
                                    console.log(`acc is: ${acc} and Currval is: ${currval}`);
                                    return acc + currval
                                }, 0 
                             )*/
                            
const myTotal = myNums.reduce( (acc, curr) => (acc + curr), 0)
console.log(myTotal);

const shoppingCart =[
                     {
                        itemName: "js",
                        price: 999
                     },
                     {
                        itemName: "py",
                        price: 699
                     },
                     {
                        itemName: "AI",
                        price: 1999
                     },
                    ]
const total = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)  
console.log(total);         