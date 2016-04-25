
function exer(d1,d2){
  var milli_d1=d1.getTime();
  var milli_d2=d2.getTime();
  var milli_diff;
  (milli_d1>milli_d2)?milli_diff=milli_d1-milli_d2:milli_diff=milli_d2-milli_d1;
  return Math.trunc(milli_diff/1000/60);
}


function execute(someFunction, date1,date2) {
  console.log("date1:"+date1);
  console.log("date2:"+date2);
  console.log("Difference in minutes:"+someFunction(date1,date2));
}

//test1 date1>date2 == 1440
var date1= new Date(2016,02,02);
var date2= new Date(2016,02,01);
execute(exer, date1,date2);

//test2 date1<date2 == 1440
date1= new Date(2016,03,01);
date2= new Date(2016,03,02);
execute(exer, date1,date2);

//test3 date1==date2 == 0
date1= new Date(2016,03,25);
date2= new Date(2016,03,25);
execute(exer, date1,date2);
