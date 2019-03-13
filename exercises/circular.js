'use strict'

/*
 * 
var circular = {
    circular:circular,
};

console.log(circular);
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :



const circular = {};
circular.circular = circular;

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */
