// https://www.acmicpc.net/problem/15552
// 출력 시에 시간초과 이슈가 발생하는 경우 해결 방법에 대해
// 답 하나마다 console.log 사용이 아니라, string 하나에 저장해두고 한 번에 출력
// console.log를 한 번만 호출해서 출력 시간을 줄인다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';
for(let i=1; i<=n; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);

  result += `${a+b}\n`;
}

console.log(result);