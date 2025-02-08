const accountId = 144553;
let accountEmail = "sahil@gmail.com";
var accountPassword = "12345";
/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
accountCity = "Meerut";

//  accountId = 2 // not allowed because it is const

accountEmail = "patel@gmail.com";
accountPassword = "6784776";
accountCity = "Noida";

console.log("AccountId = " + accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);
