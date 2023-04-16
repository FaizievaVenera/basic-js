const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domain = {}
for(let i=0; i<domains.length; i++){
  let count = 0  
  let pathOfDomain = ''
  for(let j=domains[i].split('.').length-1; j>=0; j--){
    pathOfDomain = pathOfDomain.concat(`.${domains[i].split('.')[j]}`)
      if(!domain[pathOfDomain]){
          domain[pathOfDomain] = 1
      }else{
          domain[pathOfDomain] += 1
      }  
  }
}  
return domain
}

module.exports = {
  getDNSStats
};
