// https://www.acmicpc.net/problem/2884
// 시각을 24로 표현할 때, 현재 시간보다 45분 빨리 맞춘 시간 구하기

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

if(m < 45) {
  h -= 1;
  m += 15;  // 분은 60분까지 있으므로... 
  if(h < 0) h = 23;
} else {
  m -= 45;
} 
console.log(h + ' ' + m);