// https://www.acmicpc.net/problem/2908
// 마지막에 큰 값 출력에서 Math.max를 사용하는 것이 낫다.
// 둘이 속도는 동일하게 120ms 였으나, 메모리는 해설답안이 아주 조금! 덜 썼다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ');

let reverseA = Number(a.split('').reverse().join(''));
let reverseB = Number(b.split('').reverse().join(''));

if(reverseA > reverseB) console.log(reverseA);
else console.log(reverseB);


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let a = input[0].split(' ')[0]; let b = input[0].split(' ')[1];
// let newA = a[2] + a[1] + a[0];
// let newB = b[2] + b[1] + b[0];
// console.log(Math.max(Number(newA), Number(newB)));