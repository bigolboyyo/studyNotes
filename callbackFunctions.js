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

//FIXME:  Study notes below

function Monday() {
    console.log('Go for a five-mile run')
    console.log('Pump iron')
}

function Tuesday() {
    console.log('Go for a five-mile run')
    console.log('Swim 40 laps')
}

function Wednesday() {
    console.log('Go for a five-mile run')
    console.log('Go for a five-mile run')
}

function Thursday() {
    console.log('Go for a five-mile run')
    console.log('Pump iron')
}

function Friday() {
    console.log('Go for a five-mile run')
    console.log('Swim 40 laps')
}

// notice how this is so much code written
// let's shorten up our 'five mile run' at least with this

function runFiveMiles() {
    console.log('Go for a five-mile run')
}

// notice here how we are doing the same thing for lifting and swimming

function liftWeights() {
    console.log('Pump iron')
}

function swimFortyLaps() {
    console.log('Swim 40 laps')
}

// with just even this we can shorten monday to something like the following

function Monday() {
    runFiveMiles()
    liftWeights()
}

// We can stil make this look better

function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}

// above here we see a function for our routine in general
// we add a parameter that will serve as our second activity

// this is because we always run everyday. so we only need to provide one argument in this case

function Monday() {
    exerciseRoutine(liftWeights)
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}

// we can see our newest form of the monday function is even shorter.
// we perform our excercise routine with the parameter being our LiftWeights function.
// we are talking about callback functions here

// Notice that in our newest monday function that liftWeights is NOT being called
// we are passing our function as a value by REFERENCE
// we do this by omitting the () at the end of the function.
// so it becomes up to exerciseRoutine() to call the function when needed

console.log(Monday())

// this brings us to First-Class Functions

// functions in JavaScript are FIRST CLASS OBJECTS.
// meaning they can be treated like any other object, whether this means
// being assigned to a variable, passed as values to other functions, returned to the value
// of other functions, and etc.

// TODO: INLINE FUNCTIONS

exerciseRoutine(function () {
    console.log('Stretch! Work that core!')
})

// "Go for a five-mile run"
// "Stretch! Work that core!"

// our exerciseRoutine() function requires a function as its first and only parameter.
// this function does NOT need to be defined beforehand
// we can pass an ANONYMOUS FUNCTION to it. see above

// Do not forget about your ARROW FUNCTIONS!!!

exerciseRoutine(() => {
    console.log('Stretch! Work that core!')
})

// Or even shorter:
exerciseRoutine(() => console.log('Stretch! Work that core!'))

// we only need to use this function ONCE. so no need to name or assign it a variable
// instead we define it INLINE as an ANON. FUNCTION.
// it then passes as the ARGUMENT when we call exerciseRoutine()

//TODO: RETURNING FUNCTIONS

// Functions can also return OTHER FUNCTIONS.
// useful for when we want to package up a function and it's environment, but not use it yet.

function morningRoutine(exercise) {
    let breakfast

    if (exercise === liftWeights) {
        breakfast = 'protein bar'
    } else if (exercise === swimFortyLaps) {
        breakfast = 'kale smoothie'
    } else {
        breakfast = 'granola'
    }

    exerciseRoutine(exercise)

    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
    }
}

const afterExercise = morningRoutine(liftWeights)
// LOG: Go for a five-mile run
// LOG: Pump iron
