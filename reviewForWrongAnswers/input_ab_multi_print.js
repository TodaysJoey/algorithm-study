// https://www.acmicpc.net/problem/10998
// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');
let a = Number(line[0]);
let b = Number(line[1]);

console.log(a*b);