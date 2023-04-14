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
  let arr = String(n).split('')
  let max = 0
  for(let i=arr.length-1; i>=0; i--){
    let tem =  String(n).split('')
    tem.splice(i, 1).join('')
    const num = +tem.join('')
    if(+num>max) max=num
  }
  return max
  }
  
  

module.exports = {
  deleteDigit
};
