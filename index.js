/*
____    _____   ______                     __
/\  _`\ /\  __`\/\__  _\                   /\ \
\ \ \ \ \ \ \/\ \/_/\ \/     ___    ___    \_\ \     __
\ \ ,  /\ \ \ \ \ \ \ \    /'___\ / __`\  /'_` \  /'__`\
 \ \ \\ \\ \ \_\ \ \_\ \__/\ \__//\ \ \ \/\ \ \ \/\  __/
  \ \_\ \_\ \_____\/\_____\ \____\ \____/\ \___,_\ \____\
   \/_/\/ /\/_____/\/_____/\/____/\/___/  \/__,_ /\/____/

================================================================
================================================================

Email Info:

Good afternoon! Below is the coding exercise.
Please upload your response to Github and send me an email to confirm that you submitted by 5:10pm (MDT).

Coding Exercise:

Write a program in JavaScript that converts a sentence from English to Inflationary English. Inflationary English takes words and word parts that sound the same as a number (e.g. “won” v. “one”) and then inflates that to the next number (e.g. “won” becomes “two”). Provide tests for your program.
Example of input and output:
Input: “Today I won an award for being awesome.”
Output: “Threeday I two an award five being awesome."

We look forward to reviewing your program.  Best of luck.

*/
/*
Byte Sized Notes:
  BaseCase:
  - 'Today I won an award for being awesome.'

  Testing:

  - build unit tests to assert equality
  - use mocha.js and chai.js

  - create a list of key value pairs representing word definitions
  - store that in a const
  - identify the words that will be inflated
  - represent the phonetic +1 representation for each word definition
  - have a const to store the passed in string for possible comparisons
  - add an accumulator variable as an empty array
  - split the string at whitespace to cast string to an array type
  - init the accumulator pattern loop
  - use a temp variable or have a way to keep track of Caps/lower case
  - translate the word only up to the index AKA Today should not be converted to Three.. but keep the day in the translation
  - add conditionals to only translate words that match in the list
  - push all words to the accumulator
  - join the result array back into a string with whitespace
  - return the result

  Goals:

  - Have Fun!

*/

// Solution:
// terms:  “To : Three won : two for : five"

const termDefinitions = { // all lower case
  "to": "three",
  "won": "two",
  "for": "five",
  "ten": 'eleven'
}

const baseCase = 'Today I won an award for being awesome.';

const testCase1 = 'Good fortune is a virtue.'; // fortune : five
const testCase2 = 'I completed this with tenure.'; // tenure : eleven

console.log(inflateString(baseCase, termDefinitions),
            inflateString(testCase1, termDefinitions),
            inflateString(testCase2, termDefinitions));


// function inflateString(string = null, dictionary = null) { // default perams if nothing is passed in
//
//   if ((string === null) || (dictionary === null)) {
//     return false;
//   }
//
//   // const strInput = string; // not neccesarry
//   const inputArray = string.split(' ');
//
//   let result = inputArray.map((word) => {
//     let tempTranslation = word;
//     for (let prop in dictionary) {
//       if(word.includes(prop)) {
//         tempTranslation = word.replace(prop, dictionary[prop]);
//       }
//     }
//     return tempTranslation;
//   });
//
//   return result.join(' '); // trim() was not neccesarry
// }

/// Refactor:

// function inflateString(string, definitions) {
//
//   return string.split(' ').map((word) => {
//     let Caps = word.toLowerCase() === word ? false : true
// ;
//     ('Today'.toLowerCase() === 'today') ? Caps : Caps = true;
//     console.log(Caps);
//
//     for (let term in definitions) {
//       (word.includes(term))? word = word.replace(term, definitions[term]) : word;
//     }
//     return word;
//   }).join(' ');
// }

// Refactor:

function inflateString(string = null, definitions = null) {

  return string.split(' ').map((word) => {
    let Caps = (word.toLowerCase() === word)
    ? false
    : true;

    word = word.toLowerCase();

    for (let term in definitions) {
      (word.includes(term))
      ? word = word.replace(term, definitions[term])
      : word;
    }

    return (Caps)
    ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    : word;
  }).join(' ');
}
