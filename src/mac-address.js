const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(n[2] && n[5] && n[8] && n[11] && n[14] !== "-") {
      return false;
    }
    else {
      n = n.split("-");
      for (let i = 0; i <n.length; i++) {
      //  console.log(typeof n[2]);
      //  console.log(n[5]);
        if(Number(n[i][0])>=0 && Number(n[i][0])<=9 || n[i].charCodeAt(0) >= 65 && n[i].charCodeAt(0) <= 70) {
          console.log(Number(n[i][0]));
          console.log(n[i].charCodeAt(0));
    if (Number(n[i][1])>=0 && Number(n[i][1])<=9 || n[i].charCodeAt(1) >= 65 && n[i].charCodeAt(1) <= 70) {
      return true;
    }
    else {return false;
    }
        }
        else {
          return false;
        }
      
      }
    }
   
  }
module.exports = {
  isMAC48Address
};
