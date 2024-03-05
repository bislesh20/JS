const account_Id = 1221                              // constant value cannot be changed 
let account_Email =  "bisleshsingh1221@gmail.com"   // memory assigned , can be changed
var account_Password = "9800"
account_City="Jaipur"
let account_State;   // if no value assigned to variable js will consider it as undefined

// account_Id = 4556 // not allowed

account_Email="hello@gamil.com"
account_Password="0000"
account_City="delhi"

console.log(account_Id);

/*
Prefer not use var because of the in block space and functional scope
*/

console.table([account_Id,account_Email,account_Password,account_City,account_State])
console.log(typeof(account_Id))