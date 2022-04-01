// EVERYTHING(well most things) IN JS IS AN OBJECT
// AN ARRAY? IT'S AN OBJECT
// AN OBJECT? IT'S AN OBJECT
// OBJECT ORIENTED PROGRAMMING!!!

//TODO: Notice below our variable phrases has an objectg in it. this object has a function in it
// this is because everything is an obj, even functions

// this is why when we call upon our time() function with dot notation below, it runs the function within

const phrase = {
	greeting: 'Hello there!',
	time: () => {
		const currentTime = new Date()
		return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
	},
}

phrases.greeting
// => "Hello there!"
phrases.time()
// => "The time is 16:51" (or whatever time it is currently on a 24-hour clock)

// remember we are still adding the () on our time() function to invoke the expression

//TODO: What if we wanted to create multiple objects at the same time? We need to use a constructor
// ** note: that this and even the funct (this) is a little past the current level of comprehension for me **

function PhraseObjectConstructor(name) {
	this.greeting = `Hello there ${name}!`
	this.time = () => {
		const currentTime = new Date()
		return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
	}
}

const phrases = new PhraseObjectConstructor('Harold')

phrases.greeting
// => "Hello there Harold!"
phrases.time()
// => "The time is 17:30"

//FIXME:FIXME: constructor functions start with a capital letter, by convention. This is a hint to let other programmers
// that the function should be used as a constructor by using the new keyword before calling the function.

//FIXME: SUPER IMPORTANT NOTES!!
/*
The essential bit in this puzzle is new -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new -
Adding new before PhraseObjectConstructor("Harold") tells JavaScript to do a couple of things:

It creates a basic Object (which gets assigned to the phrases variable).
It binds this to the newly created Object. The properties defined in the function now belong to this new Object.
It adds a new property, __proto__ to the Object.
*/
//FIXME:

// TODO: this.

//this is a reserved word in JavaScript that returns the context it is in.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// The value of this depends on where and how it is used. Consider the following plain object:

const example0 = {
	name: 'Henry',
	test: function () {
		return this
	},
}

example.test()
// => {name: "Henry", test: ƒ}

// this can be very useful since we can use it to reference objects from inside themselves.

const example1 = {
	name: 'Henry',
	sayName: function () {
		return `My name is ${this.name}`
	},
}

example.sayName()
// => "My name is Henry"

//FIXME: above we can see this.name is referring to the obj created that it is nested in.
// so this ref of this is the NAME of THIS obj, which is henry

//FIXME: also see: Going back to new, when we call new PhraseObjectConstructor("Harold"),
// this gets bound to the newly created object, turning this.greeting and this.time into properties for that object.

//TODO: A BRIEF intro to Prototypal Inheritance
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// We mentioned that when using new, a property __proto__ is added to the newly created object
//The prototype contains inherited properties, often methods.

// remember the constructor funtion (use 1st letter caps for constructor funtions) are objects too
// so the passing down of this info from object to object (which could get crazy intricate)
// it is known as the PROTOTYPE CHAIN
// Properties of an Object that are in the prototype can be accessed using the __proto__ property of an individual object.

// for ex: Methods like pop() (and push(), shift(), unshift(), etc...) are available on every Array we create
// because these methods exist in the prototype shared by all Arrays. We can actually see them if we use exampleArray.__proto__.

exampleArray.__proto__
// => {
// concat: ƒ,
// constructor: ƒ,
// ...
// ...
// pop: ƒ,
// push: ƒ,
// ...
// ...
// }

//FIXME:
/*
Object -> PhraseObjectConstructor -> individual object
*/
//FIXME:

//TODO:TODO: OBJECT SUMMARY

/*
We know they can contain properties
We know 'this' can be used in an object to reference itself
We know Objects inherit shared properties from other Objects via the prototype chain
We know many things in JavaScript are actually Objects
There are multiple ways to create Objects
*/

// JavaScript doesn't strictly adhere to some specific design principles related to object-orientation
// but is typically referred to as OBject Oriented because of it's capabilities

function PhraseObjectConstructor(name) {
	// here we using a construction funciton with one param
	this.greeting = `Hello there ${name}!` // we can see 'this.' in action
	this.time = () => {
		// time becomes a function expression
		const currentTime = new Date() // giving a place for our return value to be assigned too
		return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}` //interpolating with the built in time methods
	}
}

/*
function PhraseObjectConstructor(name) {
	this.greeting = `Hello there ${name}!`
	this.time = () => {
		const currentTime = new Date()
		return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
	}
}
*/

const phrases1 = new PhraseObjectConstructor('Harold')
const phrases2 = new PhraseObjectConstructor('Hank')

// we are declaring new function expressions... then assigning them "NEW" proto inheritance by simply passing in the "name" param

phrases1.greeting
// => "Hello there Harold!"
phrases2.greeting
// => "Hello there Hank!"

//TODO:TODO:TODO:TODO: 4/1/22 Instructor Workshop notes
// notes on destructuring

const exampleMailingInfo = {
	firstName: 'Wes',
	lastName: 'Grant',
	streetNumber: 123,
	street: 'Highland Dr',
	city: 'Gotham',
	state: 'VA',
	zipCode: '20169',
}

function formatAddress(mailingInfo) {
	const format = `
	${exampleMailingInfo.firstName}\n
	${exampleMailingInfo.lastName}\n
	${exampleMailingInfo.streetNumber}\n
	${exampleMailingInfo.street}\n
	${exampleMailingInfo.city}\n
	${exampleMailingInfo.state}\n
	${exampleMailingInfo.zipCode}
	`
	return format
}

console.log(formatAddress(exampleMailingInfo))
