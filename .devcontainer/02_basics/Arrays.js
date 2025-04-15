// Arrays

const myArr = [1,2,3,4,5,true,"vikas"]
console.log(myArr[1]);

const myheroes = ["ShaktiMaan","Nagraj","Chacha Chaudhary"]

const mynewArr = new Array(1,2,3,4,5)
console.log(mynewArr[3]);

// Array Methods

myArr.push(6)
console.log(myArr);
myArr.push("Khandel")
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)        // Appends value 9 to the start of the array
console.log(myArr);

myArr.shift()   // Removes the value in the start of the array
console.log(myArr);

// console.log(myArr.includes("vikas"));
// console.log(myArr.indexOf("vikas"));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice aur Splice

const myn1 = myArr.slice(1,3) // 1 is index here and index 3 is not included
console.log("A ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) // 1 is index here and index 3 is included here
console.log("B ", myArr); // splice eats the portion of the array also 
// and removes the element from the array
console.log(myn2);

