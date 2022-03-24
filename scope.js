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
