// https://www.acmicpc.net/problem/1000
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A+B를 출력한다.

// note: 첫째줄이라는 것은, 파일에서의 첫째줄.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// [1, 2]
let line = input[0].split(' ');
let a = parseInt(line[0]);  // Number(line[0])
let b = parseInt(line[1]);

console.log(a+b);