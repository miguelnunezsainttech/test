
function exer(str1){
  var result;
  if (str1.length==0) return "";
  var prev=str1[0];
  var count=0;
  result=prev;
  count++;
  i=1;
  while (i<str1.length) {
    if (prev==str1[i])
      count++;
    else {
      result+=count+str1[i];
      prev=str1[i];
      count=1;
    }
    i++;
  }
  result+=count;
  if (result.length>str1.length)
    result=str1;
  return result;
}


function execute(someFunction, st1) {
  console.log("string: "+st1);
  console.log("result: "+someFunction(st1));
}



//test1 res== "a2b1c5a3"
var s1="aabcccccaaa";
execute(exer, s1);

//test2 res== "abcde"
s1="abcde";
execute(exer, s1);

//test3 res== "a1b23c1d1e1"
s1="abbbbbbbbbbbbbbbbbbbbbbbcde";
execute(exer, s1);
