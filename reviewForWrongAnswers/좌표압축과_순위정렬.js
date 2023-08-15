// https://www.acmicpc.net/problem/18870
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let uArr = [...new Set(arr)];

uArr.sort((a,b)=>a-b);

let myMap = new Map();
for(let i=0; i<uArr.length; i++) {
  myMap.set(uArr[i], i);
}

let answer = '';
for(x of arr) answer += myMap.get(x) + ' ';

console.log(answer);
