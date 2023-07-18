// https://www.acmicpc.net/problem/11720
// let x of string < 반복문에서 이 내용을 기억해두자..

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let string = input[1];
let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며 for (let x of string) {
// 모든 숫자를 더하기
for (let x of string) {
  answer += Number(x);
}
console.log(answer);


// 내가 푼 방법
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let nums = input[1].split('');
// let answer = 0;

// for(let i=0; i<n; i++){
//   answer += Number(nums[i]);
// }

// console.log(answer);




