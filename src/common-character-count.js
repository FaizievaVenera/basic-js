const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = Array.from(s1).sort();
  let arr2 = Array.from(s2).sort();

  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    outer: for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr2[j]);
        arr2.splice(j, 1);
        break outer;
      }
    }
  }
  console.log(arr3.length);
  return arr3.length;
}

module.exports = {
  getCommonCharacterCount,
};
