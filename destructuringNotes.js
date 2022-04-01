// DESTRUCTURING NOTES

let arr = [1, 2, 3]
//arr.push(4)
//console.log(arr)
// [1, 2, 3, 4]

let arr2 = [...arr, 4] //using the spread ... operator
// console.log(arr2)
// [1, 2, 3, 4]

let arr3 = [...arr2]
arr3.push(5)
console.log(arr3)
// [1, 2, 3, 4, 5]

console.log(arr2)
// [1, 2, 3, 4]

let catObj = {
	name: 'rose',
}

let catObj2 = catObj
catObj2.age = 9

console.log(catObj)
console.log(catObj2)

// this is where we start talking about spreading for real and it'll lead into destructuring
// notice above when we console log catObj and catObj2, they become the same object, because of 'pass-by reference'

// let's look at spreading it now

let catObj3 = { ...catObj2, age: 12, name: 'Franky' } // we are adding {} curlies and including the spread operator ...
console.log(catObj3)

// we spread the values of catObj2, and changed the age and name accordingly

// if an object has a number of keys we can pull those keys out as variables

/*
let { name, age } = catObj2
console.log(name)
console.log(age)
*/

// notice with catObj2 is still rose, 9

let { name, age } = catObj3
console.log(name)
console.log(age)

// here our logs will be Franky, 12

let [col1, col2, col3] = ['red', 'white', 'blue']
console.log(col1) //red
console.log(col2) //white
console.log(col3) //blue

// this works with arrays as well, except it'll be ordered by the element number of the array
