// https://www.acmicpc.net/problem/10814

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for(let i=1; i<=n; i++){
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  arr.push([age, name]);
}

// stable sort가 기본
// 키가 동일한 원소가 여러개면, 원래 앞에 있는 원소는 계속 앞에 있음
arr.sort((a,b)=>a[0]-b[0]);

let answer = '';
for(let x of arr) answer += x[0] + ' ' + x[1] + '\n';

console.log(answer);