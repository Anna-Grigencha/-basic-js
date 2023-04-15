const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let result = '';

  if (!('repeatTimes' in options)) {
    options.repeatTimes = 1;
  }
  if (!('separator' in options)) options.separator = '+';
  if (!('addition' in options)) options.addition = '';
  if (!('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
  if (!('additionSeparator' in options)) options.additionSeparator = '|';
  let addition = "";

  addition = options.addition;

  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    addition = addition + options.additionSeparator + options.addition;
  }
  let newStr = str + addition;
  let repeatingStr = newStr;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    newStr = newStr + options.separator + repeatingStr;
  }

  return newStr;

}

module.exports = {
  repeater
};
