//TODO: Identify JS objects
//TODO: Access a value stored in an object
//TODO: Learn about JavaScript's Object methods

//Arrays are great for representing simple, ordered data sets
//Objects are better when modeling more complex structures

//FIXME: What is 'object-oriented programming'? JavaScript adapted to accommodate it

//A JavaScript Object is a data structure consisting of KEYs and VALUEs.. sim to Ruby's Hash or Python's Dictionary

// as opposed to this following address variable we can make it "accessible with [] brackets"
const address = '$43805 Central Station Drive, Ashburn, VA 20147'

// as an array
const arrayAddress = [
    '43805',
    'Central Station Drive',
    'Ashburn',
    'VA',
    '20147',
]

// now we can grab individual pieces of data from above, this is still inefficient with complex structures
arrayAddress.splice(2, 1, 'Cashburn')
//console.log(arrayAddress)

// an Object is a collection of data, much like an Array
// OBJECTS consist of a list of "properties" (key-value pairs) bounded by curly braces {}
// the properties can point to values of ANY data type - even other OBJECTS

// TODO: we can have an empty OBJECT

// const obj = {}

// TODO: single property OBJECTs

/*
const obj1 = { 'key:' : 'value' }
*/

// TODO: use commas to separate multiple properties in the same OBJECT

/*
const obj2 = {
    'key1:' : 'value1',
    'key2:' :'value2',
}
*/

// TODO: you can also NEST OBJECTS. Think of OBJECT INCEPTION

/*
const nestedObject = {
    key2: value2,
    key3: {
        innerKey: innerValue,
        innerKey1: innerValue1,
    }
*/

// console.log(obj)

// re-defining the above address as an OBJECT

/*
const objectAddress = {
    street: {
        line1: '43805',
        line2: 'Central Station Dr',
    },
    city: 'Ashburn',
    state: 'VA',
    zipCode: '20147',
}
*/

// console.log(objectAddress)

// multiple PROPERTIES can have the same value
// but KEYs must be unieque. if the same key is used for multiple prop,
// only the final value will be retained. the rest overwritten

/*
const meals0 = {
    breakfast: 'Avocado toast',
    breakfast: 'Oatmeal',
    breakfast: 'Scrambled eggs',
}
*/

// => { breakfast: "Scrambled eggs" }

// you can ACCESS a VALUE stored in an OBJECT
// you do this by typing the variable name, then use either DOT or BRACKET notation

// TODO: DOT NOTATION .

/*
address.street
address.city
address.state
address.zipCode
*/

// TODO: Then to access a value inside address.street,
// we simply append the inner key, again using dot notation

/*
address.street.line1
address.street.line2
*/

// TODO: BRACKET NOTATION []

/*
address['street']
address['street']['line1']
*/
// console.log(objectAddress['street']['line2'])
/*
address['city']
address['state']
address['zipCode']
*/
/*
console.log(objectAddress['zip' + 'Code'])

const meals = {
    breakfast: 'Oatmeal',
    lunch: 'Caesar Salad',
    dinner: 'Chimichangas',
}

let aM = 'breakfast'
let pM = 'lunch'
let night = 'dinner'

console.log(meals[pM])
*/

// so essentially DOT notation is for when you know the exact name of the property in advance
// bracket is for when you need to compute it when the program runs

// Object practice below

const user = {
    name: 'Wes',
    age: 28,
    married: false,
    physicalDescription: ['freckles', 'fat', 'paleAF'],

    sayName: function () {
        console.log(this.name)
    },
}

function sayMyAge() {
    console.log(`My age is ${user.age}`)
}

sayMyAge()

// TODO: JavaScript OBJECT METHODS

// modifying a property using . or [] notations

const mondayMenu = {
    cheesePlate: {
        soft: 'Chevre',
        semiSoft: 'Gruyere',
        hard: 'Manchego',
    },
    fries: 'Curly',
    salad: 'Cobb',
}

// Destructive method:
//mondayMenu.fries = 'Sweet potato'
//console.log(mondayMenu)

function destructivelyUpdateObject(obj, key, value) {
    obj[key] = value
    return obj
}

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, 'salad', 'Caesar')
//console.log(tuesdayMenu)

// try the mondayMenu now! it's been destructeded
console.log(mondayMenu.salad)

// how can we be non-destructive? SPREAD IT OUT ...

/*
function nonDestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj }
    newObj[key] = value
    return newObj
}
*/

// by restructuring the above function we have made it "cleaner"
// it still calls upon the obj, key, and value
// instead of a "newObject" we return the spread of the obj : see line 209

function nonDestructivelyUpdateObject(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

const sundayMenu = nonDestructivelyUpdateObject(
    tuesdayMenu,
    'fries',
    'Shoestring'
)

// by spreading it out we were able to recall the tuesday menu without issue!

console.log(tuesdayMenu.fries)
console.log(sundayMenu.fries)

// non destructive tends to be more performant

// Remove a property from an object with the delete operator!

const wedMenu = {
    cheesePlate: {
        soft: 'Brie',
        semiSoft: 'Fontina',
        hard: 'Provolone',
    },
    fries: 'Sweet Potato',
    salad: 'Southwestern',
}

// arrays are special types of objects
// we can set properties on an array just like an object

const myArray = []
myArray.summary = ['Empty array!']

console.log(myArray)

myArray['summary'] = 'this array is totally empty.'

console.log(myArray)
console.log(myArray.summary)

// you can even .push(), unshift(), etc... in both arrays/objects

myArray.push('Never gonna give you up!', 123123345)
console.log(myArray)

console.log(myArray.length)

console.log(myArray[0])

// an ARRAY is special. it has Array-Style Elements that get stored separately from it's Object style properties.
// so that's why when using length we get 2. It's the 2 items in the "special list"

//TODO: if we add a new property to an array that has a key of 0,
//      how does JS engine know whetherit should be an Object style property or an Array style element???

/*
const newArray = []

newArray[0] = 'Will this be an `Object` property or an `Array` element?'
newArray[1] = 'Hinga Dinga Dergin McJankenJerbenManJensen'

console.log(newArray.length)

console.log(typeof newArray)
console.log(newArray[0])
console.log(newArray[1])
*/

//TODO: FUNDAMENTAL TRUTH: ALL KEYS IN OBJECTS AND ALL INDEXES IN ARRAYS ARE ACTUALLY STRINGS.

const truthArray = ['The', 'Only', 'Truth', 'Is', 'The', 'Number', 42]

truthArray['1'] = 'Absolute'

console.log(truthArray)

truthArray['1'] = 'Based'

console.log(truthArray)

console.log(truthArray[01])
console.log(truthArray['01'])

console.log(truthArray.length)

console.log(Object.keys(truthArray))

/*
For accessing elements in an Array, always use integers.
Be wary of setting Object-style properties on an Array. 
There's rarely any reason to, and it's usually more trouble than it's worth.
Remember that all Object keys, including Array indexes, are strings. 
This will really come into play when we learn how to iterate over Objects, so keep it in the back of your mind.
*/
