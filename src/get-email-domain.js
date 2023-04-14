const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  let index = email.indexOf("@");
  let domen = email.slice(index + 1, email.length);
  if (domen.indexOf("@") !== -1) {
    domen = getEmailDomain(domen);
  }
  return domen;
}

module.exports = {
  getEmailDomain,
};
