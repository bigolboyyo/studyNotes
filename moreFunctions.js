/*

// continued studies of functions in JavaScript functions

// sayHi() // you can run and invoke your function even before the function is declared!!

function sayHi(name) {
    console.log('Hello ' + name)
}
// sayHi('Ash') // You must invoke your function!!

// hiRose() /* notice how calling the hiRose function doesn't work here */
// this is because of HOISTING

/*
const hiRose = function () {
    console.log('Hi Rose')
}
/* this is an anonymous function */

// hiRose() /* this one calls because we declared an anonymous function and defined it before this

/*const doMath = function (number, num2) {
    /*console.log(number * num2)*/
//return (
//     number * num2
//  ) /* will complete this operation before returning the value */
// }
console.log(doMath(5, 5))

//NOTE: Using return is needed if we want the value of our function to be "interactable"

let fiveByFive = doMath(5, 5)

console.log(fiveByFive)

// PRACTICE

const blankArray = []
const practiceArray = ['This', 'Is', 'The', 'String', 'Of', 'An', 'Array']
const nestedObject = {
    nest1: [
        {
            subNest1: 'subNest1 data',
            subNest2: 'subNest2 data',
            objectSubNest: {
                objSubKey1: 'objSubKey1 data',
                objSubKey2: 'objSubKey2 data',
            },
        },
    ],
    nest2: [
        {
            deeperSubNest1: 'subNest1 data from the deep',
            deeperSubNest2: 'subNest2 data from the deep',
            deepObjSubNest: {
                deepObjSubKey1: 'objSubKey1 data from the deep',
                nestedObjectInNestObj: {
                    theGreatDeepNesting: 'Data from the deepest depths of all!',
                },
                deepObjSubKey2: 'objSubKey2 data from the deep',
            },
        },
    ],
}

function cycleArray(param) {
    if (Array.isArray(param)) {
        for (const element of param) {
            cycleArray(element)
        }
    } else if (typeof param === 'object') {
        for (const key in param) {
            console.log(key)
            cycleArray(param[key])
        }
    } else {
        console.log(param)
    }
}

cycleArray(nestedObject)

//TODO: FURTHER FUNCTION REVIEW!!

//Define: Function - the most important unit of code in JavaScript.
// they serve as a way to group together related bits of JS code.

//Define: Abstraction - latin roots of "to pull away."
// it's the impression or the 'take away' that we get from a set of data.
// ex: PB&J - takes bread, peanut butter, jelly, a knife, a plate, a napkin, etc...

// to "execute" or "call" the function you add () after its name

// Define: Generalization by using Paramaters and Arguments
// for ex if we made a function called exerciseDog(dogName, dogBreed)
// this function would be generalized, or abstracted through the paramaters.

//so if we logged the parameter names with interpolation, this is an idea of generalization

// in conclusion

function functionName(parameter1, parameter2, parameter3) {
    //body code goes here
}

// most common way to define a function is with a
// FUNCTION DECLARATION

function razzle() {
    console.log("You've been  razzled!")
}

// the word RAZZLE become a pointer to some stored, potential, not yet
// actually run bit of work (the function)
// the pointer is used 'call' or 'invoke' the function. using ()

// YOU CAN WRITE FUNCTION DECLARATIONS AFTER YOU CALL them
// HOISTING

//TODO: FUNCTION EXPRESSION FUN

// programming languages feature EXPRESSIONS: which are
// arrangements of constants, variables, and symbols
// that after interpretation produce a value
/*
// functions require a funtion NAME
*/

//TODO: DEFINE IIFE: Immediately-Invoked Function Expression

//TODO: DEFINE FIRST CLASS FUNCTIONS
