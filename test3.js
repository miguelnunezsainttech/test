
function exer(matrix){
  var result=[];

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      //Create array with size the row to transposed
      if (!Array.isArray(result[j]))
        result[j]=new Array(matrix.length);
      result[j][i]=matrix[i][j];
    }
  }
  return result;
}


function execute(someFunction, matrix) {
  console.log("cal:"+matrix);
  console.log("result:"+someFunction(matrix));
}



//test1

/* matrix
1,2,3
4,5,6
*/

/* result matrix
1,4
2,5
3,6
*/
var matrix=[[1,2,3],[4,5,6]];
execute(exer, matrix);


//test2

/* matrix
3,1
0,4
*/

/* result matrix
1,0
1,4
*/
var matrix=[[3,1],[0,4]];
execute(exer, matrix);
