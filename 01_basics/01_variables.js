const accountId = 144553
let accountEmail = "avi@mail.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState

// accountId = 2  //not allowed
accountEmail = "av@av.com"
accountPassword = "12345678"
accountCity = "Bhojpal"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])