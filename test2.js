
function exer(cal){
  var arr_val=cal.split("");

  //First calculete * and /
  var i=0;
  while(i<arr_val.length){
    switch (arr_val[i]) {
      case '*':
        arr_val[i-1]=arr_val[i-1]*arr_val[i+1];
        arr_val.splice(i, 2);
        i--;
      break;
      case '/':
        arr_val[i-1]=arr_val[i-1]/arr_val[i+1];
        arr_val.splice(i, 2);
        i--;
      break;
    }
    i++;
  }

  //Second calculete + and -
  i=0;
  while(i<arr_val.length){
    switch (arr_val[i]) {
      case '+':
        arr_val[i-1]=parseFloat(arr_val[i-1])+parseFloat(arr_val[i+1]);
        arr_val.splice(i, 2);
        i--;
      break;
      case '-':
        arr_val[i-1]=parseFloat(arr_val[i-1])-parseFloat(+arr_val[i+1]);
        arr_val.splice(i, 2);
        i--;
      break;
    }
    i++;
  }

  //The first position is the result
  return arr_val[0];

}


function execute(someFunction, cal) {
  console.log("cal:"+cal);
  console.log("result:"+someFunction(cal));
}



//test0 5+4-2 ==7
var cal="5+4-2";
execute(exer, cal);


//test1 6+6*6 ==42
var cal="6+6*6";
execute(exer, cal);


//test2 6+6*6/6 ==12
var cal="6+6*6/6";
execute(exer, cal);


//test3 7+7*0/3 ==7
var cal="7+7*0/3";
execute(exer, cal);
