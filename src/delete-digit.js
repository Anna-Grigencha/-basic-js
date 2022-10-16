const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newNumber = [];
  let max = 0;
  n = String(n).split("");
  for (let i = 0; i< n.length; i++) {
   for (let j = 0; j< n.length; j++) {
 if (i !== j) {
   newNumber.push(n[j]); 
 }
   }
   let num = Number(newNumber.join(""));
 if (num > max) {
   max = num;
 }
   newNumber = [];
  } 
 console.log(max);
  return max;
 }

module.exports = {
  deleteDigit
};
