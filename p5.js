
//Write a function that determines whether a given string is a valid palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Ignore cases and all non-alphanumeric characters.

// Input: A single string str.
// Output: Return true if the string is a valid palindrome, false otherwise.

// Example 
/*
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false

Input:" "
Output: true

Input: "1234"
output: false
*/

function validatePalindrome(str) {
  
    let char = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()  //it replace all which is not alphanumeric with '' 
    console.log(char)

    let rev=''
    for (let i = char.length - 1; i >= 0; i--) {
        rev+=char[i]
        
    }
    console.log(rev)
    return ( char == rev ? true:false)
}

validatePalindrome("race a car");