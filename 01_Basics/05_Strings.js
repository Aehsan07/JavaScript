const name = "Aehsan"
const repoCount = 3

console.log(name + repoCount);
//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  

const gameName = new String("clash-of-clans");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,8)
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStringOne = "     Aehsan Shaikh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aehsan.com/aehsan%20shaikh"

console.log(url.replace('%20','-'));
console.log(url.includes('aehsan'));
console.log(gameName.split('-'));