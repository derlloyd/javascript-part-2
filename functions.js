/* EXERCISE 1
Create a function that can be used with sort. 
This function should take two strings, 
and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings 
and try to get it sorted using your new function.
*/

function longestString(strA, strB) {
    return strA.length > strB.length;
}

var myArray = ["one", "2", "three", "fourrr", "5", "66"];

// console.log(myArray.sort(longestString));

/* EXERCISE 2
Create an array of objects will contain a name and email property
run some code that will sort your array by the longest name
run some code that will sort your array by e-mail address in alphabetical order.run
*/

var objectA = {
    name: "Guy", 
    email: "guy@yahoo.com",
    num: 3
}

var objectB = {
    name: "Phillip", 
    email: "phillippo@gmail.com",
    num: 5
}

var objectC = {
    name: "Aaron", 
    email: "aa@me.com",
    num: 2
}

var objectArray = [objectA, objectB, objectC];

function longestName(objA, objB) {
    return objA.name.length < objB.name.length;
}

// sort array by longest name
// console.log(objectArray.sort(longestName));

function emailAlpha(objA, objB) {
    return objA.email > objB.email;
}

// sort array by alphabetical email
// console.log(objectArray.sort(emailAlpha));


/* EXERCISE 3
Create a function that can be used with Array.prototype.map.
take a number and return its square
use this function with map on an array of numbers to check the result
*/

function squareNumber(a) {
    return a * a;
}

// console.log([1, 2, 3, 4, 5, 6].map(squareNumber));

/* EXERCISE 4
Create a function that can be used with Array.prototype.map.
object and square its “num” property
use this function with map on an array of objects 
each containing a “num” property
*/

function squareNumOfObject(a) {
    return a.num * a.num;
}

// console.log(objectArray.map(squareNumOfObject));

/* EXERCISE 5
Create a function called operationMaker
takes only a string called operation as argument
This string could be “add”, “subtract”, “mult” or “div”
return a function that will take two numbers and return the result
*/

function operationMaker(operation) {
    switch (operation) {
        case "add":
            return function(a, b) {return a + b};
        case "subtract":
            return function(a, b) {return a - b};
        case "mult":
            return function(a, b) {return a * b};
        case "div":
            return function(a, b) {return a / b};
        default:
    }
}

var adder = operationMaker("add");
var sum = adder(5, 10); //15
console.log(sum)

var multiplier = operationMaker("mult");
var product = multiplier(5, 10); // 50
console.log(product)