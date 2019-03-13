'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {    

  let singleWord = str.split(' ');

  for (let i=0; i < singleWord.length; i++) {
     singleWord[i] = singleWord[i].slice(0,1).toUpperCase() + singleWord[i].slice(1).toLowerCase();
  }

  return singleWord.join(' ');

};  


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase("You must write your own tests"),"You Must Write Your Own Tests")
assert.strictEqual(jadenCase("jai guru deva om"),"Jai Guru Deva Om")
assert.strictEqual(jadenCase("LOREM IPSUM DOLOR SIT AMET"),"Lorem Ipsum Dolor Sit Amet")
assert.strictEqual(jadenCase("lIBERA nOS a mALO"),"Libera Nos A Malo")

// assert.fail('You must write your own tests')
// End of tests */
