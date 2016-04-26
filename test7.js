
function exer(fl1){
  var st_bin=fl1.toString(2);
  if (st_bin.length>32) st_bin="Error";

  return st_bin;
}


function execute(someFunction, float1) {
  console.log("Float: "+float1);
  console.log("Binary: "+someFunction(float1))
}


/* Samples
Float: 0.021929679438471794
Binary: 0.00000101100111010010111011111
Float: 0.03535145241767168
Binary: 0.000010010000110011001010111101
Float: 0.04877322539687157
Binary: 0.0000110001111100011001101111
Float: 0.06219499837607145
Binary: 0.000011111110110000000010111011
Float: 0.06741158850491047
Binary: 0.00010001010000011110001011001
Float: 0.07412247452884912
Binary: 0.000100101111100110110000110001
*/
/*Samples calculator
var r=0.0000000001;
for (var i = 0; i <10000000000 ; i++) {
  r=r+0.0000000001;
   if (execute(exer, r)!="Error") {
     console.log("Float: "+r);
     console.log("Binary: "+execute(exer, r));
   }
}
*/


//test1
var f1=0.15;
execute(exer, f1);

f1=0.021929679438471794;
execute(exer, f1);

f1=0.03535145241767168;
execute(exer, f1);

f1=0.04877322539687157;
execute(exer, f1);

f1=0.06741158850491047;
execute(exer, f1);
