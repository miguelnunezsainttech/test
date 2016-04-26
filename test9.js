
function exer(ar1){
  var result=[];
  var max_length=0;

  for (var i = 0; i < ar1.length; i++) {
    if (max_length<ar1[i].length)
      max_length=ar1[i].length;
  }

  console.log(Array(max_length+5).join("*"));
  for (var i = 0; i < ar1.length; i++) {
    console.log("* "+ar1[i]+Array(max_length-ar1[i].length+2).join(" ")+"*");
  }
  console.log(Array(max_length+5).join("*"));

  return max_length;
}


function execute(someFunction, arr1) {
  console.log("array1: "+arr1);
  console.log("result: "+someFunction(arr1));
}




//test1 ["November", "is", "the", "coolest", "month", "of", "the", "Year"]
/* Result
************
* November *
* is       *
* the      *
* coolest  *
* month    *
* of       *
* the      *
* Year     *
************
*/
var a1=["November", "is", "the", "coolest", "month", "of", "the", "Year"];
execute(exer, a1);
