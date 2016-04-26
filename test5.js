
function exer(){
  var sum=0;
  //limit=1,000,000
  var limit=Math.pow(10,6);
  for (var k = 1; k <= limit ; k++) {
    sum+=(Math.pow(-1, k+1))/(2*k-1);
  }

  return 4 * sum;
}

function execute(someFunction) {
  console.log("Sum: "+someFunction());
}

//test1 k3 == 3.48
execute(exer);
