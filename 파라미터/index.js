/*이론공부
function printSquare(x) {
  console.log(x*x);
};

printSquare(2);
printSquare(5);
printSquare(6);
*/

/*실습
function teraToGiga(x){
  console.log(x+'TB는');
  console.log(x*1024+'GB입니다.');
};
function teraToMega(x){
  console.log(x+'TB는');
  console.log(x*(1024**2)+'MB입니다.');
};

teraToGiga(2);
teraToMega(2);
*/

//여러 파라미터 실습

function bmiCalculator(name,weight,height){
  console.log(name+'님의 체질량지수는 '+weight/(height**2/10000)+'입니다.');

};

