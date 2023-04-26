// Variables in JavaScript
// We have -> var, let, const
// var is nolonger used frequently because it is globally scoped
// Therefore we have let and const
// let allows us to reassign variables while const can't

let age = 30;
age = 32;

console.log(age)

const score = 10;
console.log(score)

// Variables in JavaScipt
// String, Number, Boolean, null, undefined, symbol

const name = 'John';
const weight = 49;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

//Check each variable type
console.log(typeof weight)

//Strings
// Concatenation
console.log('My name is ' +name+ ' and I am ' +weight+'kg of wieght');
// Template String
console.log(`My name is ${name} and I am ${weight}kg of weight`);

const hello = `My name is ${name} and I am ${weight}kg of weight`;
console.log(hello)

// String properties and methods

const s = 'Captain David!'

// Length of characters
console.log(s.length)

// Change case
console.log(s.toUpperCase())
console.log(s.toLowerCase())

// substring
console.log(s.substring(0,4).toUpperCase())

// Split string to an array
console.log(s.split(''));

const l = 'technology, information, computers, IT, programming, hacking'
console.log(l.split(','))

// This is a single line comment

/* multiple
line
comment*/

// Arrays - variables that hold multiple values

// Using array constructor Array()
const numbers = new Array(1,2,3,4);
console.log(numbers);

// by setting brackets
const fruits = ['apples', 'oranges', 'passion', 'pineapples', 10, true] // we can have multiple data types in the same array
console.log(fruits)

// Accessing items in an array
console.log(fruits[1])
// Replace/ adding to array
fruits[3] = 'grapes'

fruits.push('Mangoes') // Adding to the end
fruits.unshift('strawberry') // Adding to the beggining
fruits.pop() // removing the last item
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('passion'))

// Object Literals - Key value pairs
const person = {
    firstName: 'Captain',
    lastName: 'David', 
    age: 30,
    hobbies: ['Music', 'Movies', 'Football'],
    // object within an object
    address: {
        street: '20157 Kabarak',
        city: 'Nakuru',
        state: 'KE',
    }
}

console.log(person)
console.log(person.address)
console.log(person.firstName, person.lastName)
console.log(person.hobbies[1])
console.log(person.address.statae)