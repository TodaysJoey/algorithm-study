// https://www.acmicpc.net/problem/2525
// 주어진 시각을 "분"의 형태로

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMin = a * 60 + b + c;  // 분의 형태로 변경
totalMin %= 1440;               // 24 * 60 = 1440

let hour = parseInt(totalMin / 60);
let minute = totalMin % 60;


console.log(hour + ' ' + minute);
