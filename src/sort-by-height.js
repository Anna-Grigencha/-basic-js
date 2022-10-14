const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let result = [];
  let count = 0;
  let j = 0;
 
let arr1 = [];
for (let i = 0; i< arr.length; i++) {
  if (arr[i] !== (-1)) {
    arr1.push (arr[i])
  }
 // else { count +=1;

 // }
}
arr1.sort((a, b) => a - b);
console.log(arr1);

for (let i = 0; i< arr.length; i++){
if (arr[i] === (-1)){
    result.push(arr[i])
    count = count + 1;
}
else if (arr[i]!== (-1)) {
   
   result.push(arr1[j]);
   j = j+1; 
}
}

console.log(arr);
console.log(result);
return result;
}

module.exports = {
  sortByHeight
};
