const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) {
      value = '';
    }
    else this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ((typeof position !== "number") || (position % 1 !== 0) || (position < 1) || (isNaN(position)) || position > this.getLength()) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {

      this.chain.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chain.reverse()
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
