// 형 변환(Type Conversion)

// String, Number, Boolean
// console.log(Number('10')+Number('5'));
// console.log(String(10+5));


// '',0,NaN <-falsy falsy : 불리언 형변환 시 false 되는 애들
// '+' 연산자는 숫자를 더하는 기능과 문자를 연결하는 기능도 있음

console.log(typeof('4'+3)); //문자열이 하나 -> 문자열
console.log(typeof(3-true));
console.log(typeof(Boolean(5)*true)); //1*1