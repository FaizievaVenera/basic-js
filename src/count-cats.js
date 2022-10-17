const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let ear = [];
  if (array.length === 0) {
    return 0;
  } else {
    let pattern = ["^^"];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] == pattern[0]) {
          ear.push(array[i][j]);
        } else {
        }
      }
    }
    return ear.length;
  }
}

module.exports = {
  countCats,
};
