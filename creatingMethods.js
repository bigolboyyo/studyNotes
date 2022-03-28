function forEach(array, callback) {
    for (i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const animals = ['dog', 'cat', 'gorrila', 'zebra', 'horse', 'mule', 'leopard']

function destructivelyToUpperCase(string) {
    string = string.toUpperCase()
    console.log(string)
    return string
}

// map

/*
  input: array, callback
  output: new array with callback called on each element
  side-effects: none
  */

function map(array, callback) {
    const newArray = [...array]

    for (i = 0; i < array.length; i++) {
        newArray[i] = callback(newArray[i])
    }

    return newArray
}

/*
  input: array, callback that returns a boolean
  output: new array contains elements where callback(element) === true
  */

function filter(array, callback) {
    const newArray = []

    for (element of array) {
        if (callback(element)) {
            newArray.push(element)
        }
    }

    return newArray
}

function isThreeLetters(string) {
    return string.length === 3
}

// let counter = 0

// function incrementCounter(counter) {
//   return counter + 1
// }

/*
  Create a function called find that takes in an array and a callback. Find() should return the first element of the array that evaluates to true when it is called by the callback function.
  
  input: array, callback
  output: first element of the array that satisfies the callback's condition
  */

function find(array, callback) {
    for (element of array) {
        if (callback(element)) {
            return element
        }
    }
}

/*
  findSecond
  
  Create a function called findSecond that takes in an array and a callback. findSecond() should return the second element of the array that evaluates to true when it is called by the callback function.
  
  input: array, callback
  output: second element of the array that satisfies the callback's condition
  
  */

function findSecond(array, callback) {
    let foundOne = false

    for (element of array) {
        if (callback(element)) {
            if (foundOne) {
                return element
            } else {
                foundOne = true
            }
        }
    }
}

// function findFirstAndSecond(array, callback) {
//   let firstFound

//   for (element of array) {
//     if (callback(element)) {
//       if (firstFound) {
//         return [firstFound, element]
//       } else {
//         firstFound = element
//       }
//     }
//   }
// }

function findFirstAndSecond(array, callback) {
    const filteredArray = filter(array, callback)
    return filteredArray.slice(0, 2)
}
