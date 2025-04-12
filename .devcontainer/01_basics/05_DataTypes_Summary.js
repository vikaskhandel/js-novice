// 2 Types - Primitive (Call by values) and Non Primitive Datatypes

// Primitive - 7 categories: String, Number, Boolean, Null, undefined, Symbol, BigInt (for scientific numbers)

const score = 100
const scoreValue = 1000.33
const isLoggedIn = false
const OutsideTemp = null
let userEmail; // Same as userEmail = undefined

const Id = Symbol('12')
const AnotherId = Symbol('12')

console.log(Id === AnotherId)

const bigNumber = 3424335345345464566456454556576756754456n
console.log(bigNumber);

// No Primitive - Reference Type
// Array, Objects, Functions

const heroes = ["ShaktiMaan","Nagraj","Hanuman"];
let myObj = {
    name: "Vikas",
    Age: 36
}

const myFuncval = function(){
    console.log("Hello World !");
}

console.log(typeof bigNumber); // Return bigint as type
console.log(typeof myFuncval); // Return type is Object Function
console.log(typeof heroes); // Return Object as type
console.log(typeof AnotherId); // Return Symbol as type

// *******************************************************
// Memories in JS
// Stack (Primitive Type) - You get a copy
// Heap (Non Primitive) - You get a reference

let myYoutubeName = "VikasKhandelOfficial"
let AnotherName = myYoutubeName
AnotherName = "Vicky"

// console.log(myYoutubeName);
// console.log(AnotherName);

let userOne = {
    email: "user1@gmail.com",
    upi: "lele@ybl.com"
}

console.log(userOne.email);

let userTwo = userOne

console.log(userTwo.email);

userTwo.email = "vikvikv@gmail.com"
console.log(userTwo.email); // Value changed as it is stored in reference
console.log(userOne.email); // Value changed as it is stored in reference

