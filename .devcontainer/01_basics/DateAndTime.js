// Dates

let mydate = new Date();
// console.log(typeof mydate);

// console.log(mydate);
// console.log(`todatestring - ${mydate.toDateString()}`);
// console.log(`tostring - ${mydate.toString()}`);
// console.log(`toISOString - ${mydate.toISOString()}`);
// console.log(`toJSON - ${mydate.toJSON()}`);
// console.log(`tolocaledtstr - ${mydate.toLocaleDateString()}`);
// console.log(`tolocalestr - ${mydate.toLocaleString()}`);
// console.log(`tolocatimstr - ${mydate.toLocaleTimeString()}`);

let mycreatedate = new Date(2025, 0, 25); // Months in JS starts with 0 (0 means January)
console.log(mycreatedate.toDateString());

let mycreatedate1 = new Date(2025, 0, 25, 5,3);
console.log(mycreatedate1.toLocaleString());

//let mycreatedate2 = new Date("2025-02-13");
let mycreatedate2 = new Date("12-12-2024");
// console.log(mycreatedate2.toDateString());
// console.log(mycreatedate2.toLocaleDateString());

let myDateTimeStamp = Date.now();
console.log(myDateTimeStamp);
console.log(mycreatedate2.getTime());

console.log(Math.floor(Date.now()/1000));

let newd = new Date();
console.log(newd.getDate());
console.log(newd.getDay());  // Sunday is 0
console.log(newd.getMonth()); // January is 0

newd.toLocaleString('default',{
    weekday: "long",
    day: "2-digit"
})
