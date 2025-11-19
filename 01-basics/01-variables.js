const account_Id = 14453
let accountEmail = "pan@gmail.com"
var accountPassword = "123pan"
accountCity = "Jaipur"
let accountState;

//account_Id = 22 not allowed because of const

accountEmail = "sou@gmail.com"
accountPassword = "108sou"
accountCity = "Kolkata"

console.table([account_Id, accountEmail, accountPassword, accountCity, accountState])

/*
    prefer not to use var due to issue in block scope
*/