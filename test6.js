
function exer(d1){
  var year_d1=d1.getFullYear();
  var year_bis= new Date(year_d1,1,29);
  if (d1>year_bis) year_bis=new Date(++year_d1,1,29);
  for (var i = 0; i < 20; i++) {
    //Calculate first leap year
    while (year_bis.getMonth()!=1) {
      year_bis= new Date(++year_d1,1,29);
    }
    console.log(year_d1);
    year_d1=year_d1+4;
  }
  return i;
}


function execute(someFunction, date1) {
  console.log("Date: "+date1);
  console.log("Number of printed years: "+someFunction(date1));
}

//Today
var now= new Date();
execute(exer, now);

//After the leap day
var d2= new Date(2016,8,29);
execute(exer, d2);

//Before the leap day
d2= new Date(2016,0,29);
execute(exer, d2);

//The leap day
d2= new Date(2016,1,29);
execute(exer, d2);
