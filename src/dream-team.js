const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArray = [];
  let str = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      members[i] = members[i].trim();
      newArray.push(members[i][0].toUpperCase());
    }
  }
  if (newArray.length === 0) {
    return false;
  } else if (newArray.length !== 0) {
    newArray.sort();
    str = newArray.join("");
    return str;
  }
}

module.exports = {
  createDreamTeam,
};
