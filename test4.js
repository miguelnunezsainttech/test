
function exer(str1,str2){
  var count_letter={};
  var result=[];
  for (var i = 0; i < str1.length; i++) {
    count_letter[str1[i]]=1;
  }

  for (i = 0; i < str2.length; i++) {
    if (count_letter[str2[i]]!==undefined){
      result.push(str2[i]);
    }
  }
  return result;
}

function execute(someFunction,str1,str2) {
  console.log("string1: "+str1);
  console.log("string2: "+str2);
  console.log("Array: "+someFunction(str1,str2));
}

//test1
/*
string1: asdfqwerzxc
string2: oilukyjhmnstdrw
Array: s,d,r,w
*/

var st1="asdfqwerzxc",st2="oilukyjhmnstdrw";
execute(exer,st1,st2);

//test2
/*
string1: pqalzmxksiwuejd
string2: rtfdhsjwuqiakjxn
Array: d,s,j,w,u,q,i,a,k,j,x
*/
st1="pqalzmxksiwuejd",st2="rtfdhsjwuqiakjxn";
execute(exer,st1,st2);
