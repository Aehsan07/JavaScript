let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);

// "33" => 33
// "33abc" => NaN -> not a number
// true => 1; false => 0

let isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Aehsan" => true
 
let sumNumber = 33
let StringNumber = String(sumNumber)
console.log(StringNumber);
console.log(typeof StringNumber);