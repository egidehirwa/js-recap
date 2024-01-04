// 1. Introduction

/* 
console.log("I like Pizza")
console.log("It's really good")
window.alert("I really like Pizza") 
*/


// 2. Variables

/* 
let firstName = "Egide";
let age = 28;
let student = true;

age = age + 1;

console.log("Hello", firstName)
console.log("You are", age, "Years old")
console.log("Enrolled", student)

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student; 
*/


// 3. Arithmetic expressions

/* 
Arithmetic expression is a combination of...
operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex. y = X + 5; 
*/

// User input


/* let username = window.prompt("What is your name ?")

console.log(username) 
*/
/* 
let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Bonjour " + username;
    console.log(username);
}
 */


// Type conversion - Change data type

// the input field returns a string so you must convert it to a number before using it

/*
let age = window.prompt("What is your name ?")

console.log(typeof age);
age = Number(age);
console.log(typeof age);

age += 1;

console.log("Happy Birthday! You are " + age + " years old") 
 */

/* 
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("Hello"); // An empty string converts to false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
 */


// Const
/* 
const PI = 3.14159;
let radius;
let circonference;

radius = window.prompt("Please enter the radius below")
radius = Number(radius)

// pi = 200;

circonference = 2 * PI * radius;

console.log("The circonference is " + circonference);
 */


// Math

/* let x;
let y = 10;
let z = 15;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.abs(x); // abs = absolute, distance from 0
//x = Math.pow(x, 3);
//x = Math.sqrt(x);

// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);

x = Math.PI

console.log(x);
 */


// Practice program

// let a;
// let b;
// let c;

/* 
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("The hypotenuse of the triangle is " + c)
 */

// Calculate Hypotenuse
/* 
document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C = " + c;
}
 */


// Create counter

/* 
let count = 0;

document.getElementById("decreaseButton").onclick = function() {
    count -= 1
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetButton").onclick = function() {
    count = 0
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function() {
    count += 1
    document.getElementById("countLabel").innerHTML = count;
}
 */


// Random Number Generator - Rolling dice

/* 
let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

document.getElementById("rollButton").onclick = function() {

    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;


    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}
 */


// Useful string properties and methods

/* 
let userName = "Egide Hirwa";
let phoneNumber = "123-456-789"

// console.log(userName.length)
// console.log(userName.charAt(6))
// console.log(userName.indexOf("i"))
// console.log(userName.lastIndexOf("i"))

// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "/")

console.log(phoneNumber)
 */


// slice() extracts a section of a string and returns it as a new string. without modifying the original string.

/* 
let fullName = "Yellow Bandana"
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName)
console.log(lastName)
 */



// Method chaining = calling one method after another in one continuous line of code.

/* 
let userName = "egide";

let letter = userName.charAt(0).toUpperCase();

console.log(letter)
 */


// If statements - A basic form of decision making, if a condition is true, then do something if not, then don4t do it.

/* 
let age = 81;

if(age >= 65){
    console.log("You are a senior")
}
else if(age >= 18){
    console.log("You are an adult")
} else if(age < 0){
    console.log("You are not yet born")
} else {
    console.log("You are a child")
}


let online = false;

if(online) {
    console.log("You are online")
} else { 
    console.log("You are Offline")
}
*/


// Checked properties
/* 
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    } else {
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if (paypalBtn.checked) {
        paymentResult.textContent = `You are paying with Paypal`;
    } else {
        paymentResult.textContent = `You must select a payment type`;
    }
}
 */


// Ternary operator - A shortcut to if{} and else{} statements. Helps to assign a variable based on a condition ? codeIfTrue : codeIffalse ;

// let age = 2;
// let message = age >= 18 ? "You are an adult" : "You are a minor" ;
// console.log(message)


// let time = 13;
// let greeting = time < 12 ? " Good morning" : " Good afternoon";
// console.log(greeting)


// let isStudent = true;
// let message = isStudent ? "you are a student" : "You are not a student" ;
// console.log(message)


// let purchaseAmount = 98;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)


// Switches - efficient replacement to many else if statements

/* 
let day = "pizza";

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`)
}
 */

/* 
let testScore = 32;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);
 */

// String methods

// let userName = "Egide Hirwa";

// charAt()
// indexOf()
// lastIndexOf()
// trim()
// toUpperCase()
// toLowerCase()
// startsWith()
// endsWith()
// includes()
// replaceAll()
// padStart() - start this number with x so that we can get to y characters
// padEnd()

/* 
let result = userName.includes(" ");

if(result){
    console.log("Your username can't include an empty space")
} else {
    console.log(userName)
}


let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.padEnd(20, "/");

console.log(phoneNumber)
*/


// string slicing - creating substring from another string

// string.slice(start, end) - The ending index is exclusive 9is not included0

/* 
const fullName = "Egidorange Hirwa";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
let firstChar = fullName.slice(0,1)
let lastChar = fullName.slice(-2)

console.log(firstName)
console.log(lastName)
console.log(firstChar)
console.log(lastChar)
console.log(fullName.indexOf(" "))
 */

///////////////////////////////////////

const email = "egidius@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName);
console.log(extension);