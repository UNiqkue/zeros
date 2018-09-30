module.exports = function getZerosCount(number) {
  
  var d = 5, i = 1, sum = 0;

  while(number>d){
    var x = Math.floor(number/d);
    sum += x;
    d = Math.pow(5, ++i);
  }
   
  return sum;
}



