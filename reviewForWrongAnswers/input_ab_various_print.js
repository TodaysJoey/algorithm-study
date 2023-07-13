// https://www.acmicpc.net/problem/10869
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

// 연산 속도는 이게 더 빨랐음
let fs = require('fs');
let answer = '';

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');
let parseNumA = Number(line[0]);
let parseNumB = Number(line[1]);
answer += (parseNumA+parseNumB) + '\n';
answer += (parseNumA-parseNumB) + '\n';
answer += (parseNumA*parseNumB) + '\n';
answer += parseInt(parseNumA/parseNumB) + '\n';     
answer += (parseNumA%parseNumB) + '\n';

console.log(answer);


// let fs = require('fs');
// let answer = '';

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let a = Number(input[0].split(' ')[0]);
// let b = Number(input[0].split(' ')[1]);
// answer += (a+b) + '\n';
// answer += (a-b) + '\n';
// answer += (a*b) + '\n';
// answer += parseInt(a/b) + '\n';         // // 나누기 연산은 실수가 나올 수 있으므로..
// answer += (a%b) + '\n';

// console.log(answer);
