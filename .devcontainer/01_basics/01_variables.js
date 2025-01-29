const accountId = 1222;
let acctmail = "vikaskhandel@gmail.com"
var accpwd = "232323333"
let acctState;
acctcity = "Mumbai"

acctcity = "Bhopal"
acctmail = "vicky@gmail.com"
accpwd = "34534"

/*
Prefer not to use var for functional scope or blockcode issue
*/

console.log(accountId);
console.table([accountId,accpwd,acctmail,acctcity,acctState]);