const name = "VikasRepo"
const RepoCount = 50

// Below is Outdated method
console.log(name +" "+ RepoCount + " Value");

// Below is String interpolation and is a modern method to write console logs
console.log(`Hello My name is ${name} and my Rep Count is ${RepoCount}`);

const gameName = new String ('Vikas-Repo')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newestr = gameName.substring(0,4) // cannot pass negative index in this
console.log(newestr);

const anotherStr = gameName.slice(-8,4) // negative means start from back
console.log(anotherStr);

const newString = "     Vikas     khandel"
console.log(newString);
console.log(newString.trim());

const url = "https://vikas%20khandel.com"
console.log(url);

console.log(url.replace('%20','-'));

console.log(url.includes('vikas'));

console.log(gameName.split('-'));

console.log(gameName.split('-')[1]);

// For learning more about methods, please open google chrome and go to 
// Inspect 
// Console
// Typein below

const gameKuhooName = new String ('Kuhoo-Repo')
console.log(gameKuhooName);

// Expand and check various methods in js related to Strings