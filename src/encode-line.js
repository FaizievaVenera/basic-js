const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = Array.from(str);
  let word = "";
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
      count++;
      i++;
    }
    if (count == 1) {
      word = word.concat(arr[i]);
    } else {
      word = word.concat(count);
      word = word.concat(arr[i]);
    }
  }
  return word;
}

module.exports = {
  encodeLine,
};
