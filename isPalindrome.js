/*
    1. take in our string
    2. convert string to lowercase
    3. remove all non-alphanumeric characters
        - maybe replaceAll() method
        - str.replace(/[^a-z0-9]/gi, '')
    4. if/else statement
        - compare with reverse()
        - if same return true, else return false
*/

const isPalindrome = function (s) {
	let string = s.toLowerCase()

	string = string.replace(/[^a-z0-0]/gi, '')

	const reversedString = string.split('').reverse().join('')

	return string === reversedString
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'))

//

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
input: 
output:
*/

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/*
const isAnagram = function (s, t) {
	let string1 = s.split('').sort().join('')
	let string2 = t.split('').sort().join('')
	return string1 === string2
}
*/

const isAnagram = function (s, t) {
	debugger
	return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram('happy', 'yapph'))
console.log(isAnagram('funky', 'supahcrazy'))
