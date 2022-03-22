//Object Iteration study notes + Scope notes

// *SCOPE*
//pay attention to the curly brackets. think about what you are returning and where it is being returned from and to.
// scope is declared at the time of declaration

// an example of a "scope chain"

TODO: FIXME: function scope1() {
    function scope2() {
        function scope3() {
            function scope4() {}
        }
    }
}

// following this is a practical example of a chain being used

function addTenToCounter() {
    console.log('addTenToCounter is running...')
    let counter = 0

    function addToCounter() {
        console.log('addToCounter is running...')
        counter++
    }

    for (i = 0; i < 10; i++) {
        addToCounter()
    }

    console.log(counter)
}

addTenToCounter()

/*
global scope
    - addTenToCounter

    addTenToCounter
    - global Scope
    - counter function
    - addToCounter()
    - for looping

    addToCounter
    - addTenToCounter's scope

    for loop
    - addToCounter's scope

FIXME: 

// LOOPING VS ITERATION
// We are using a looping construct to perform ITERATION study

TODO: // *LOOPING*

let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (let i = 0; i < array.length; i++){
    console.log(myArray[i])
}

// with a WHILE loop
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

let i = 0;

    while (i < myArray.length) {
        console.log(mArray[i++])
    }

    //The for...of statement will give us a better view. ie. it's more pretty
    const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    for (const element of myArray) {
        console.log(element)
    }
    */

//CONST vs LET
// notice that for...of allows us to use const instead of let (this is good practice to always use const)

// *ITERATION*

// the FOR...IN statement is sim to FOR...OF
/// FOR...IN is generally used for iterating over the properties of an object

TODO: for (const [KEY] in [OBJECT]) {
    // Code in the statement body
}

// the FOR...IN statement passes over the properties in the statement, but only passes on the KEYS
// you can easily access the object's values by combining the passed in key with the [] bracket operator

for (const key in address) {
    console.log(address[key])
}

// why do we need to use [] instead of the DOT operator .......??????
/*
for (const key in address) {
    console.log(address.key);
  }
  
  // LOG: undefined
  */

// Use a for...in statement whenever you want to enumerate the properties of an object.

// ARRAYS ARE OBJECTS
// but don't use FOR...IN in arrays a a general rule
// we have FOR...OF now

//TODO: OBJECTS IN OBJECTs

const userInfo = {
    firstName: 'Avi',
    lastName: 'Flombaum',
    company: {
        name: 'Flatbook Labs',
        jobTitle: 'Developer Apprentice',
    },
    friends: [
        /* notice how this is an OBJECT inside an ARRAY */
        {
            firstName: 'Nancy',
            lastName: 'Burgess',
            company: {
                /* This is an object inside an object that is inside an array */
                name: 'Flatbook Labs',
                jobTitle: 'Developer Apprentice',
            },
        },
        /* THIS IS WHERE A STRONG GRASP ON THE SCOPE OF YOUR CODE BECOMES SO IMPORTANT */
        {
            firstName: 'Corinna',
            lastName: 'Jackson',
            company: {
                name: 'Flatbook Labs',
                jobTitle: 'Lead Developer',
            },
        },
    ],
    projects: [
        {
            title: 'Flatbook',
            description:
                'The premier Flatiron School-based social network in the world.',
        },
        {
            title: 'Scuber',
            description:
                'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.',
        },
    ],
}

// FIXME: we are going to practice accessing some of these objects within and their elements/properties.

// for a property at the top level of our object we can grab a value using dot.notation

userInfo.lastName
//=> Flombaum

// if the property we're accessing is nested inside another object, we just append the additional keys to

userInfo.company.jobTitle
//=> Developer Apprentice

// if the property is nested inside an arry, we need to specify the index in the array for the object that we want.

userInfo.friends[0].firstName
//=> Nancy

userInfo.projects[1].title
//=> Scuber

// FIXME: You can work with nested ARRAYS WITHIN ARRAYS WOOOOOT
// it's really not much different than working with objects

const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]]

// how would you access the first letter 'e'?

letters[1] // we are grabbing the second element of the entire array here

letters[1][1] // then we are grabbing the second element of that element

letters[1][1][1] // the second element of the previous element

letters[1][1][1][1] // see the pattern here

letters[1][1][1][1][0] // finally we want the first element in that final nested arrays

// remember that each lookup (each set of square brackets) "drills down" into each successive nested array.

//TODO: Iterating over nested objects and arrays

// in this next example we are creating a for...in loop within a function
// notice further below we are targeting userInfo as the "const key" from our userInfo object above.
// during the code block where the console.log happens we are using [] notation to target the KEYS of the object and log them.
// the target being the "target" of the object

function shallowIterator(target) {
    for (const key in target) {
        console.log(target[key])
    }
}

shallowIterator(userInfo)
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Senior Developer
// LOG: Flatbook
// LOG: The premier Flatiron School-based social network in the world.
// LOG: Scuber
// LOG: A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.

//FIXME:
// we can also use it in arrays!!! the for...in loop that is

const primes = [2, 3, 5, 7, 11]

shallowIterator(primes)
// LOG: 2
// LOG: 3
// LOG: 5
// LOG: 7
// LOG: 11

// this is where we can learn why FOR...IN isn't the best iterator to use with arrays. (cross-browser consisistency is an issue)

//this function just can't handle NESTED COLLECTIONS
// it has no concept of DEPTH
const numbers = [1, [2, [4, [5, [6]], 3]]]

shallowIterator(numbers)
// LOG: 1
// LOG: [2, [4, [5, [6]], 3]]

// when it tries to iterate over the above nested NUMBERS array, it only sees 2 elements and calls it a day

// by using an IF condition and the TYPEOF operator we can tackle nested arrays

function advancedIterator(target) {
    for (const key in target) {
        if (typeof target[key] === 'object') {
            for (const nestedKey in target[key]) {
                console.log(target[key][nestedKey])
            }
        } else {
            console.log(target[key])
        }
    }
}

advancedIterator(numbers)
// LOG: 1
// LOG: 2
// LOG: [4, [5, [6]], 3]

// we can see that we've gone two level deep now.
// from here we will have to add a new FOR...IN statement for every level of nesting. This can quickly baloon our function to an unmanageable size
// because of this we would also have to know exactly the target structure ahead of time and update our function accordingly.

//TODO: THIS IS WHERE WE TALK ABOUT RECURSION
//      RECURSION
// Essentially it is function that calls itself

// Rewriting our advancedIterator() to take advantage of recursion

function deepIterator(target) {
    if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
    } else {
        console.log(target)
    }
}

// ok take that same function and let's add some console.logs for visualization

function deepIterator(target) {
    console.log('Argument: ', target)
    if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
    } else {
        console.log('Logged value: ', target)
    }
}

const nestedArray = [1, [2, [4, [5, [6]], 3]]]

deepIterator(nestedArray)

/*
Argument:  [ 1, [ 2, [ 4, [Array], 3 ] ] ]   //.. as the function runs we get our first argument logged. consisting of the entire array
Argument:  1                                 //.. if typeof target is an object. we are console logging the argument of the array again
Logged value:  1                             //.. this is because the KEY in TARGET object that we have "argued" is now gonna re-run the function.. this time targeting the KEY of the TARGET
Argument:  [ 2, [ 4, [ 5, [Array] ], 3 ] ]   //.. else we log LOGGED VALUE: TARGET above
Argument:  2
Logged value:  2                             //.. the cycle has started over... move down into the nest of arrays.. RECURSION WOOO
Argument:  [ 4, [ 5, [ 6 ] ], 3 ]
Argument:  4                                 //.. JavaScript is continuing reading on, moving down the line.. after every else occurs diving further down
Logged value:  4
Argument:  [ 5, [ 6 ] ]                      
Argument:  5
Logged value:  5
Argument:  [ 6 ]
Argument:  6
Logged value:  6
Argument:  3
Logged value:  3                             //.. Finally logging the final property of the final ordered array
*/

//TODO: WE Can see how this is used on our userInfo object as well

deepIterator(userInfo)
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Lead Developer
// LOG: Flatbook
// LOG: The premier Flatiron School-based social network in the world.
// LOG: Scuber
// LOG: A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.

// you can see how you could add a COUNTER to keep track of how many times our function recursively invoked itself.

let counter = 0

function deepIterator(target) {
    counter++

    if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
    } else {
        console.log(target)
    }
}

//TODO: Array Static Method        Array.isArray()
//      Used to determine whether a variable is an array

function deepIterator(target) {
    if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }

        /* ARRAY.ISARRAY IN ACTION RIGHT HERE */
    } else if (Array.isArray(target)) {
        console.log('We found an array')
        // iterate through the array
    } else {
        // console.log(target);
    }
}

deepIterator(userInfo)

// notice if you run the above code with Array.isArray() method we get nothing
// we need to reverse the order of our conditions.

function deepIterator(target) {
    if (Array.isArray(target)) {
        // iterate through the array
        console.log('We found an array')
    } else if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
    } else {
        console.log(target)
    }
}

deepIterator(userInfo)
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: We found an array
// LOG: We found an array

//TODO: Now imagine using the FOR...OF within our IF statement

function deepIterator(target) {
    if (Array.isArray(target)) {
        for (const element of target) {
            deepIterator(element)
        }
    } else if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
    } else {
        console.log(target)
    }
}

deepIterator(userInfo)
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Lead Developer
// LOG: Flatbook
// LOG: The premier Flatiron School-based social network in the world.
// LOG: Scuber
// LOG: A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.
