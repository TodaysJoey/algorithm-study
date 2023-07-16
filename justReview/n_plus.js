
// https://www.acmicpc.net/problem/8393
// 1부터 n까지의 합을 구하는 프로그램
// 등차수열을 이용해 구할 수 있다.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

console.log(n * (n+1) / 2);