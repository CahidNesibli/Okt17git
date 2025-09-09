// slice()
let str = "Hello, my name is Cahid"
let part = str.slice(2, 10)
console.log(`slice(2, 10): ${part}`);
// replace()
let replaceStr = str.replace("Hello", "Salam")
console.log(replaceStr);
// toUpperCase() toLowerCase()
let lower = str.toLowerCase()
let uppar = str.toUpperCase()
console.log(`str.toLowerCase(): ${lower}`);
console.log(`str.toUpperCase(): ${uppar}`);
// concat()
let str2 = "Game"
let sum = str2 + str
console.log(sum);
console.log(str2.concat(str));
// trim()
let trItems = "Hello"
console.log(trItems);
console.log(trItems.trim());
console.log(trItems.trim() === "Hello");
// charAt(index)
let strIndex = str.charAt(1)
console.log(strIndex);
// split()     
let arr = str.split(" ")
console.log(arr);