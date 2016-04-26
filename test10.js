
function exer(ar1,ar2){
  var result=[];

  for (var i = 0; i < ar1.length; i++) {
    result.push(ar1[i]);
    if (ar2[i]!==undefined)
      result.push(ar2[i]);
  }

  while (i<ar2.length){
    result.push(ar2[i++])
  }

  return result;
}


function execute(someFunction, arr1,arr2) {
  console.log("array1: "+arr1);
  console.log("array2: "+arr2);
  console.log("result: "+someFunction(arr1,arr2));
}



//test1 res== [x,10,y,20,z,30]
var a1=['x','y','z'],a2=[10,20,30];
execute(exer, a1,a2);


//test2 res== [x,10,y,20,z,30,z1]
var a1=['x','y','z','z1'],a2=[10,20,30];
execute(exer, a1,a2);


//test3 res== [x,10,y,20,z,30,40]
var a1=['x','y','z'],a2=[10,20,30,40];
execute(exer, a1,a2);
