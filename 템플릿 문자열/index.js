// 템플릿 문자열(template strings)
// template : 일정한 틀, 형식
let year = 2000;
let month = 11;
let day = 15;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);


// 템플릿 문자열 실습
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 괄호 안에 코드를 채워 넣으세요
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);

// 자료형 마지막 실습
// 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요
// 여기에 코드를 작성하세요

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);