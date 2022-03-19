// personal looping notes

// LOOPS: for...loop
//        for...of
//        for...in

let books = [
    'Eloquent JavaScript',
    'JavaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    "You don't know js",
    'JavaScript: The definitive Guide',
]

let oneBook = {
    title: 'Eloquent JavaScript',
    author: 'Marijin Haverbeke',
    publisher: 'No Starch Press',
}

/*
function loopThroughBooks(books) {
    for (let i = 0; i < books.length; i++) {
        //Statement
        console.log(books[i])
    }
}
*/

// the OF LOOP
// look below and see the extra numbers for counting are gone
// for is for the Initialization of the loop itself
// creating a condition is the declaring of "book"
// the final expression being of books
// and the Statement being in curly brackets following the final expression

TODO: function loopThroughBooks(books) {
    for (let book of books) {
        console.log(book)
    }
}

// loopThroughBooks(books)

// THE FOR LOOP contains 4 main parts
// Initialization, Condition, Final-expression, and the Statement

// LOOP THROUGH OBJECTs

function loopThroughObj(obj) {
    for (let key in obj) {
        //console.log(key)
        console.log(obj[key])
    }
}

loopThroughObj(oneBook)
