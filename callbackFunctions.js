//What is a callback function?

function iReturnThings(thing) {
    return thing
}

iReturnThings({ firstName: 'Brendan', lastName: 'Eich' })
// => {firstName: "Brendan", lastName: "Eich"}

// FUNCTIONS ARE OBJECTS with hidden special code in them that can be invoked with

iReturnThings(function () {
    return 4 + 5
})
// => ƒ () { return 4 + 5; }

// we can pass off these functions and invoke them inside of others

function iInvokeThings(thing) {
    return thing()
}

iInvokeThings(function () {
    return 4 + 5
})
// => 9

iInvokeThings(function () {
    return 'Hello, ' + 'world!'
})
// => "Hello, world!"

// The function becomes the value of the param "thing"

// let's dive deep in this next example

function main(cb) {
    console.log(cb())
}

// here we are calling the function with a function inside of it.

main(function () {
    return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"
})
// LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!

// the MAIN() FUNCTION has an anonymous function in it that returns the string
// the return value of the anon. function gets put in as the param for the MAIN() function

function greet(name, cb) {
    return cb(name)
}

greet('Ada Lovelace', function (name) {
    return 'Hello there, ' + name
})
// => "Hello there, Ada Lovelace"

// above we have our function greet(name, cb){}
// we call our function greet and insert Ada as the name for param1
// our second argument for our param is a function itself

function doMath(num1, num2, cb) {
    return cb(num1, num2)
}

console.log(
    doMath(42, 8, function (num1, num2) {
        return num1 * num2
    })
)
// => 336

// Remember HOISTING
// JavaScript reads everything twice

// Because we are calling our function with the cb variable defined as a function...
// the return of doMath() becomes the CB FUNCTION itself

//TODO: let's look at a more advanced example

function somethingExpensive(cb) {
    // do something crazy,
    // like fetching a bajillion websites
    // then pass their data to the callback:
    cb(data)
}
