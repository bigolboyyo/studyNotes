//TODO: First Class Functions part 1

//Global Scope
// let books = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6']
let num = [1, 2, 3, 4, 5, 6]

//FIXME: Talking about a function expression now

const loopThroughArray = function (array) {
	for (let item of array) {
		console.log(item)
	}
}

//FIXME: This expression will act as the anon function above that loops through the "items" of our passed in array

const capitalizeArray = (array) => {
	let newArr = []
	for (let item of array) {
		newArr.push(item.toUpperCase())
	}
	console.log(newArr)
}

function handleBooks(fun) {
	let books = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6']

	fun(books) //we can invoke our param "fun" as if it was a function
}

//handleArray(books)
//handleArray(num)

//FIXME: #1
//handleBooks(loopThroughArray)

//FIXME: #2
//handleBooks(capitalizeArray)

// ok so we created our function handleBooks
// in that function we moved our books from global scope to the function's inner scope

//we are treating 'fun' as a callback function

//so when we handleBooks.. and the function we pass in is loopThroughArray
// it will loop through the array in handleBooks because it was being treated as a CB FUNCTION

//same thing when we pass capitalizeArray. we are doing the same thing except capitalzing the "items" in our for... of loop
// but it returns as an array because we are pushing it onto our empty newArr = []

//remember our "fun" param being used as a callback is DIVERSE
// we can pass in whatever function to act upon our books array defined in the handleBooks function itself

//TODO:TODO: First Class Functions part2

let daBooks = [
	{
		title: 'daBook1',
		price: 16.0,
		inventory: 5,
	},

	{
		title: 'daBook2',
		price: 10.5,
		inventory: 10,
	},

	{
		title: 'daBook3',
		price: 25.0,
		inventory: 2,
	},

	{
		title: 'daBook4',
		price: 60.0,
		inventory: 8,
	},

	{
		title: 'daBook5',
		price: 18.95,
		inventory: 0,
	},
]

function printReport(foo) {
	console.log(foo(daBooks))
}

function totalInventory(arr) {
	let total = 0
	for (let item of arr) {
		total += item.inventory
	}

	return `The Total Inventory is: ${total} books`
	//if you never provide a return value for the function, there will be no value to be passed on
	// so totalInventory was passed daBooks, it ran through our loop and added everything
	// but no return value, so when the function "ended" the value would be 'nothing'
}

//FIXME: #3
//printReport(totalInventory)
// at this time: undefined
// see line: 97
// We did NOT return the total, so nothing was returned to be able to be logged

function replenish(array) {
	let replenishList = []
	for (item of array) {
		if (item.inventory < 3) {
			replenishList.push(item.title) // we are pushing the name specifically, so we recieve only the data we want
		}
	}
	return `Place Order for: ${replenishList.join(', ')}`
}

//printReport(replenish)
// at this time we are returning 'nothing' for our replenishList
// our bug is that "name" is not defined

//FIXME: My own personal function
/*
function stopOrdering(bookTotal) {
	let maxInv = 30

	if (printReport(totalInventory) > maxInv) {
		return `You have exceeded the max inventory of ${maxInv}`
	}
	return 'You can keep buying!'
}
*/

//TODO: PT3 - refer to our daBooks array of objects

//FIXME: GOAL =

// take an  inventory array as an argument
// and a function that will update my inventory items
// let's loop through daBooks and update every item in books
// push my books to a new array and return that update books array

function updateInventory(inv, funct1, funct2) {
	let updatedInv = []
	for (let item of inv) {
		updatedInv.push(funct1(item))
	}
	return updatedInv
}

// make it dynamic
// the function should take an item as an argument
// update the items price to 50% off

function halfOffSale(item) {
	item.price = Math.floor(item.price / 2)
	return item
}

// takes an item, and restocks the item inventory by 5

function stockItem(item) {
	item.inventory += 5
	return item
}

//console.log(updateInventory(daBooks, halfOffSale))

//so our func updateInventory has the params of the passed in inventory and a the CB function itself
// so when we pass it our daBooks inv, it will halfOffSale the entire passed in inventory

//console.log(updateInventory(daBooks, stockItem))

// using the .map() method
//console.log(daBooks.map(halfOffSale))

//TODO:TODO: Part 4

//write a function the locates a specific book
// loops through inventory
// finds the first object whos condition returns true based on callback of the function

function loopAndFind(inv, finder) {
	let result = null

	for (let item of inv) {
		if (finder(item) === true) {
			result = item
			break // YOU CAN USE A BREAK STATEMENT TO END A LOOP
			//return result
		}
	}
	return result
}

function isBook(book) {
	return book.title === 'daBook1'
}

function stockFirst(item) {
	return item.inventory < 3
}

// console.log(loopAndFind(daBooks, isBook))
// console.log(loopAndFind(daBooks, stockFirst))

let foundItem = daBooks.find(isBook)
//console.log(foundItem)

//TODO: TODO: PART 5
// using the .reduce() method

// practice using a funtion expression
//this will determine what happens when we used our reduce() method
// it's a 'reducer' function

const reducer = (accum, item) => {
	//accum is our accumaltor, so the end variable who's value is "accumulated" onto

	return accum + ', ' + item.title
}

let total = daBooks.reduce(reducer, '').substring(2)

//console.log(total)

// a reducer function that gets passed to our reduce() method can do more than just math

//TODO:TODO: PART 6
// using .forEach() the "non-expressive" iterator

/*
function loopThrough(inv, cb) {
	for (let item of inv) {
		cb(item)
	}
}
*/

daBooks.forEach((item) => console.log(item.title.toUpperCase()))
