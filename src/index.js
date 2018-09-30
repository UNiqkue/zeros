module.exports = function getZerosCount(number) {
  
  var d = 5, i = 1;
  var x;
  var sum = 0;

  while(number>d){
    x = number / d;
    sum += x;
    i++;
    d = d^i;
  }
   
  return Math.round(sum);
}



