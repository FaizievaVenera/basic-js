const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if(arr instanceof Array){
  for(let i=0; i < arr.length; i++){
      if(arr[i]== '--discard-next' || arr[i]== '--discard-prev' ||  arr[i]== '--double-next'||  arr[i]== '--double-prev'){
        if(i!=arr.length-1 &&( arr[i]=='--discard-next'|| arr[i]=='--double-next')){
          if( arr[i]=='--double-next'){
              newArr.push(arr[i+1])
          }else{
                  arr[i+1]=null;
          }
    }else if(i!=0 &&( arr[i]=='--discard-prev'|| arr[i]=='--double-prev')&&typeof arr[i-1] == 'number'){
          if( arr[i]== '--discard-prev' ){
           newArr.pop(newArr[newArr.length-1])
            }else{
 
              if(arr[i]== '--double-prev'&& arr[i-2]=='--double-next'){
                  newArr.push(arr[i-1])
              }else{
               newArr.push(newArr[i-1])
              }
          }
        }      
  }
  else{
      if(arr[i-1]!='--discard-next'){
          newArr.push(arr[i])
      }
   
}
  }
  return newArr
}else{
  throw new Error("'arr' parameter must be an instance of the Array!")
}
}


module.exports = {
  transform
};
