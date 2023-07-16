// https://www.acmicpc.net/problem/1546
// 새로운 평균값 구하기
// 총합을 구하거나, 최대값을 구하는 문제는 reduce 사용법을 잘 알아두어야 한다.
// maxValue = scores.reduce((a,b) => Math.max(a,b));


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = Math.max(...scores);
let totalScore = 0;
for(let i=0; i<n; i++) {
  totalScore += (scores[i]/max)*100;
}

console.log((totalScore/n));