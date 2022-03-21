// notes from live instructor session about HOISTING

//JavaScript reads your code twice.
// the function sayHello() is stored in memory

//console.log(sayHello)

/*
console.log(sayHello())
console.log(message)

function sayHello() {
    return 'Hello, this lecture is all about hoisting!'
}

var message = 'Hello, this variable is meant to portray hoisting'

let letMessage = "this won't be hoisted"

*/

/*
- Creation Phase 
 - ln 10: declared sayHello()
 - ln 14: declared message

- Execution Phase
 - ln 7: console.logged teh output of sayHello
  - runs sayHello() function stored in memory from the creation phase.
  - ln 16: console.logged the output of message(undefined)
  - etc etc
*/

// TODO: // JUST DO NOT USE VAR

// hoisting is somewhat archaic
// it's from a time when JavaScript was soley used for scripting in the browser

// TODO: // LET US TALK ABOUT FUNCTION EXPRESSIONS AND DECLARATIONS
// ALSO ARROW FUNCTIONS

function myFunction() {
    // code block
}

console.log(mySecondFunction('We love JavaScript!'))

console.log(mySecondFunction())

// THIS FUNCTION EXPRESSION WILL CAUSE A REFERENCE ERROR BECAUSE IT CAN NOT BE HOISTED. THE CONST KEYWORD

/*
const mySecondFunction = (message) => {
    return `My message is: ${message}`
}
*/

// whereas this function CAN BE HOISTED...
// see the console.log ln 46 && 48

function mySecondFunction(message) {
    return `My message is: ${message}`
}
