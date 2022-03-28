// WE know about array methods that allows us to modify them by add/subtracting elements with push(),slice(),etc.
// Those kind of methods operate on teh array as a whole!

// JavaScript offers us methods that allow us to not only iterate, but interact with each individual element in some way.

const users = [
    {
        firstName: 'Niky',
        lastName: 'Morgan',
        favoriteColor: 'Blue',
        favoriteAnimal: 'Jaguar',
        personalQuote: "You're never too old to learn something new",
    },
    {
        firstName: 'Tracy',
        lastName: 'Lum',
        favoriteColor: 'Yellow',
        favoriteAnimal: 'Penguin',
        personalQuote:
            'I just got lost in thought - it was unfamiliar territory',
    },
    {
        firstName: 'Josh',
        lastName: 'Rowley',
        favoriteColor: 'Blue',
        favoriteAnimal: 'Penguin',
        personalQuote: `Always remember you're unique, just like everyone else`,
    },
    {
        firstName: 'Kate',
        lastName: 'Travers',
        favoriteColor: 'Red',
        favoriteAnimal: 'Jaguar',
        personalQuote: 'Behind every great man is a woman rolling her eyes',
    },
    {
        firstName: 'Avidor',
        lastName: 'Turkewitz',
        favoriteColor: 'Blue',
        favoriteAnimal: 'Penguin',
        personalQuote: `You don't have to see the whole staircase, just take the first step`,
    },
    {
        firstName: 'Drew',
        lastName: 'Price',
        favoriteColor: 'Yellow',
        favoriteAnimal: 'Elephant',
        personalQuote: `Failure is not the opposite of success: it's part of success`,
    },
]

function firstNamePrinter(collection) {
    for (const user of collection) {
        console.log(user.firstName)
    }
}

// firstNamePrinter(users)

function blueFilter(collection) {
    for (const user of collection) {
        if (user.favoriteColor === 'Blue') {
            console.log(user.firstName)
        }
    }
}

// blueFilter(users)

// ok so what if we wanted to print out people who' favorite color is red?
// well instead of making a new function for red. we could add a new param for "color"

function colorFilter(collection, color) {
    for (const user of collection) {
        if (user.favoriteColor === color) {
            console.log(user.firstName)
        }
    }
}

// colorFilter(users, 'Red')
// Kate

// with our second param we can call upon 'Red' by it's property value when we call our function!
// obviously you could nest this, so see how useful this can be?!

/*
There are any number of ways we might want to interact with the elements in our array, but all of them have some things in common: in all cases, we 
1) pass in an array, 
2) iterate through it using some sort of loop, and 
3) write some code to interact with each element in the desired way.
*/

/*
                                    Use Case  | 	Method
Finding a single element that meets a condition ===	indexOf(), find()
Finding and returning a list of elements that meet a condition === filter()
Modifying each element and returning the modified array ===	map()
Creating a summary or aggregation of values in an array ===	reduce()
*/

//TODO: FINDING ARRAY ELEMENTS!!!

// there are two different methods that we use to locate data in arrays.
//  For simple conditions, we use Array.prototype.indexOf().
// For more complex calculations, we use Array.prototype.find().

const cards = [
    'queen of hearts',
    'jack of clubs',
    'ten of diamonds',
    'ace of spades',
]

cards.indexOf('jack of clubs') //=> 1   // it returns 1 because `jack of clubs' is in the 1 position element in the array
cards.indexOf('jack of hearts') //=> -1  // it returns -1 because jack of hearts does not exist in the array

// If you pass in the optional second argument, indexOf() will begin the search at the specified position:

cards.indexOf('ace of spades', 2) //=> 3   // NOTICE HOW IT GIVES YOU THE POSITION OF THE ELEMENT ITSELF, not the pos. in relation to the starting point
cards.indexOf('jack of clubs', 2) //=> -1  // -1 because NOT FOUND

// Array.prototype.find() allows you to execute more complex searches by passing it a callback function.

function isOdd(element, index, array) {
    return element % 2 === 1
}

// above we have created our isOdd() function
// each iteration, passes three arguments to the callback: the current element of the array, the index of the current element, and the array itself
// these arguments for find() can be captured as parameters in the callback and used inside the function

// Array.prototype.find() will iterate through the array, passing each element in turn to isOdd()

;[4, 6, 8, 10].find(isOdd) //=> undefined, not found
;[4, 5, 8, 10].find(isOdd) //=> 5
;[4, 5, 7, 8, 10].find(isOdd) //=> 5
;[4, 7, 5, 8, 10].find(isOdd) //=> 7

// find() AUTOMATICALLY passes the 3 arguments to our function.

// indexOf() when you are looking for something more simple and straightforward
// find() takes a function as an argument and allows for more complex searches

//FIXME: FILTERING ARRAYS!!!
// moving on to the filter() method

/// what makes a function "PURE" and why are they are preferable to "IMPURE" functions?

// so sometimes we want to return more than 1 single element. we want to return ALL the elements
// this is the filter() method.... WE are going to refer to our above 'const users = ['

function firstNamePrinter(collection) {
    for (const user of collection) {
        console.log(user.firstName)
    }
}

// ABOVE IS REVIEW. WE CAN ITERATE OVER THAT COLLECTION and print out all the firstName variables

function blueFilter(collection) {
    for (const user of collection) {
        if (user.favoriteColor === 'Blue') {
            console.log(user.firstName)
        }
    }
}

function colorFilter(collection, color) {
    for (const user of collection) {
        if (user.favoriteColor === color) {
            console.log(user.firstName)
        }
    }
}

colorFilter(users, 'Red')
// REVIEW:::: we can look for specific properties... like favColor being blue

// or if you notice we set a new param "color" so we can define it ourself when invoking the function

//TODO:
//      Let's work on making this more abstract

function filter(collection, attribute, value) {
    for (const user of collection) {
        if (user[attribute] === value) {
            console.log(user.firstName)
        }
    }
}

filter(users, 'favoriteAnimal', 'Jaguar')

//TODO:
// so this is just ok, not great.. we can see if we have to filter by more than one atrribute it would start looking like this

function filter(collection, attribute1, value1, attribute2, value2) {
    for (const user of collection) {
        if (user[attribute1] === value1 && user[attribute2] === value2) {
            console.log(user.firstName)
        }
    }
}

filter(users, 'favoriteAnimal', 'Jaguar', 'favoriteColor', 'Blue')
// LOG: Niky

//TODO: OBVIOUSLY this would get ridiculous after a while... also it already is kinda excessive

// this is bad because we are adding way too much logic to our "poor little function"

// To fix this, we can extract the comparison logic into a separate function:

function filter(collection) {
    for (const user of collection) {
        if (likesElephants(user)) {
            console.log(user.firstName)
        }
    }
}

function likesElephants(user) {
    return user['favoriteAnimal'] === 'Elephant'
}

filter(users)
// LOG: Drew

// If we want to use a different comparison function, we'd have to rewrite filter().

// we can avoid this by using a CALLBACK FUNCTION

function filter(collection, cb) {
    for (const user of collection) {
        if (cb(user)) {
            console.log(user.firstName)
        }
    }
}

filter(users, function (user) {
    return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'
})
// LOG: Josh
// LOG: Avidor

filter(users, function (user) {
    return user.favoriteColor === 'Yellow'
})
// LOG: Tracy
// LOG: Drew

// Our filter() function doesn't know or care about any of the comparison logic encapsulated in the callback function

// TODO: Now let's move on to PURE and IMPURE functions

// FIXME: PURE
// If a pure function is repeatedly invoked with the same set of arguments, the function will always return the same result. Its behavior is predictable.
// Additionally, invoking the function has no external side-effects such as making a network or database call or altering any object(s) passed to it as an argument.

// FIXME: IMPURE
// the return value is not predictable, and invoking the function might make network or database calls or alter any objects passed in as arguments.

// Here is an example of an IMPURE FUNCTION:

function randomMultiplyAndFloor() {
    return Math.floor(Math.random() * 100)
}

randomMultiplyAndFloor()
// => 53
randomMultiplyAndFloor()
// => 66

// FIXME: We are using the Math Library to produce two random results, so the function when invoked will always be different/random

// FIXME: Another example is this next one because it alters teh passed-in object

const ada = {
    name: 'Ada Lovelace',
    age: 202,
}

function happyBirthday(person) {
    console.log(
        `Happy birthday, ${person.name}! You're ${++person.age} years old!`
    )
}

happyBirthday(ada)
// LOG: Happy birthday, Ada Lovelace! You're 203 years old!

happyBirthday(ada)
// LOG: Happy birthday, Ada Lovelace! You're 204 years old!

ada
// => {name: "Ada Lovelace", age: 204}

// The ++ affects the person.age every time it is invoked

// FIXME: WE HAVE TWO MAIN REASONS WE WANT TO AVOID IMPURE FUNCTIONS

// 1. predictable code is good. It makes writing tests for a function easy as well as we don't have to worry about "HOW" our function will work
// 2. cuz PURE functions don't have side effects, it makes debugging easier!
//      - if the bug was from a pure function, the debugging process would be linear and well-scoped
//      - whereas if the array is modified by impure functs... we'd have to follow the data around on a wild goose chase
// ie.. the fewer places a particular object can be modified, the fewer places we have to look when debugging

//FIXME:  HERE IS A PURE TAKE ON OUR randomMultiplyAndFloor()

function multiplyAndFloor(num) {
    return Math.floor(num * 100)
}

const randNum = Math.random()

randNum
// => 0.9123939589869237

multiplyAndFloor(randNum)
// => 91
multiplyAndFloor(randNum)
// => 91

// We can see here that the new variable randNum has been assigned a random number.. becuz of this
// when we invoke our funct with it as a param, we get the same random number that was assigned

//FIXME: Now let's turn our filter function into a PURE function

const adaAge202 = {
    name: 'Ada Lovelace',
    age: 202,
}

function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 })

    console.log(
        `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
    )

    return newPerson
}

const adaAge203 = happyBirthday(adaAge202)
// LOG: Happy birthday, Ada Lovelace! You're 203 years old!

adaAge202
// => {name: "Ada Lovelace", age: 202}

adaAge203
// => {name: "Ada Lovelace", age: 203}

// notice we let a new variable newPerson and it is equal to Object.assing(conditionals)

// so our adaAge202 object will always be what it is...
// then our happyBirthday function will take in the param of (person)
// so later when we create Age203 and assign it to the invocation of happyBirthday(adaAge202) it'll log the string but add 1 to person.age
// from here we could make const adaAge204 = happyBirthday(adaAge203)
// and so on and so forth
/*
 */
// FIXME: here is a more simple example as followup

// [1, 2, 3, 4, 5].filter(function (num) {
//    return num > 3;
//  });

// ^^ so in are simple example above we define our array that we are passing to the filter() method...
// we are creating an ANONYMOUS FUNCTION that has a param of num as the CALLBACK param for the filter method
// then defining the code block as return and num greater than 3

// this will give us [4, 5]

//TODO:
//TODO: THESE ARE THE MOST IMPORTANT TAKEAWAYS FROM THESE NOTES
//TODO:

// we NO LONGER need to create a for or for...of loop
// in each iteration through the array, the current element is stored in a variable for us. We no longer need to access elements using their INDEX VALUES!!!
// a new array is auto created and returned after the iterations are complete, so we no longer to create an empty array and push the elements onto it

// ARRAY METHODS like find(), filter(), and the others above are all EXPRESSIVE methods.
// meaning:
// as soon as we(or other devs) see that filter()...etc, is being called we know that the code is looking for elements in an array that meet certain conditions...
// AND returns a new array containing those elements
// IT EASILY EXPRESSES ITSELF

// another example of why these methods are EXPRESSIVE would be...

// the map() method is being called, we immediately know that the code is modifying the elements in an array and returning an array containing the modded values.

// BEING EXPRESSIVE MAKES OUR CODE EASIER TO READ THAN IF WERE TO SAY USE A GENERIC LOOPING CONSTRUCT
