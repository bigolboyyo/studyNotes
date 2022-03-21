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
