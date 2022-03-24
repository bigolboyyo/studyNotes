//TODO: Scope notes

// be able to understand the execution context
// describe the diff between global and functional scope
// how does block scoping affect variables declared with let and const
// SCOPE IS THE CONCEPT OF WHERE SOMETHING IS AVAILABLE
// practice creating NESTED FUNCTIONS
// remember that the JS engine makes a 'first pass' over your code before executing it

//FIXME: EXECUTION CONTEXT

// every execution context creates a new scope that encompasses all of the
// variables and functions declared within it
// GLOBAL, FUNCTIONAL, BLOCK
// if you forget the use of CONST or LET than the variable will always be available globally
// this goes for variables within functions or block scope
// you very rarely (if ever) will need to use the context of making your variables in a global scope

//TODO: SCOPE CHAIN

// every function in JS has access to a scope chain
// this chain inludes all the references to the function's OUTER SCOPE
// outer scope being the scope in which the function was declared
// a function declared in the top level of our JS file has a GLOBAL Outer Scope

const globalVar = 1

function firstFunc() {
    const firstVar = 2

    function secondFunc() {
        const secondVar = 3

        return secondVar + firstVar + globalVar
    }

    const resultFromSecondFunc = secondFunc()

    return resultFromSecondFunc
}

firstFunc()
// => 6

//GLOBAL CONTEXT ---> globalVar
//EXECUTION CONTEXT for the firstFunc() ---> firstVar
//Execution context for the secondFunc() ---> secondVar

// firstFunc() would NOT have access secondVar because of the scope chain
/// the secondVar WOULD have access to the firstFunc() though because it's outer scope
// is the secondFunc() who's outer scope is the firstVar, who's outer scope is the firstFunc()

// IDENTIFIERS: REMEMBER when we declare a variable or a function, we provide a name
// this name allows us to refer back to it
// we call those names IDENTIFIERS

//FIXME: The JavaScript Engine!

// when our JS code is run in the browser it makes two separate passes over our code
// The following first phase is known as the COMPILATION PHASE

// COMPILATION PHASE - 1. it reaches a variable declaration,
//                   the engine allocates memeroy and sets up a ref to the variable's identifier
//                   - 2. When teh engine encounters a function declaration, it does 3 things
//                          - allocates mem. and sets up a ref. to the func. identifier
//                          - creates a new execution context with a new scope
//                          - adds a ref to the parent's scope (the outer environment) creating the SCOPE CHAIN

// EXECUTION PHASE - the second pass the engine steps through our code line-by-line
//                 - this time it actually runs our code. assigning values and invoking functs.

//TODO: LEXICAL SCOPING

// How does JS decide which 'outer scope' to place into the scope chain for the new function?

const myVar = 'Foo'

function first() {
    console.log('Inside first()')

    console.log('myVar is currently equal to:', myVar)
}

function second() {
    const myVar = 'Bar'

    first()
}
