// https://www.acmicpc.net/problem/2562
// 배열 내 최대값과 그 인덱스 구하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let nIdx = 1;
let nMax = input.reduce((a,b,i)=>{
  if(b>a) {
    nIdx = i+1;
    return b;
  } else {
    return a;
  }
});

console.log(nMax +'\n' + nIdx);


/**
 * 이 방법이 더 간편한 듯.
 */
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

// let max = Math.max(...input);

// console.log(max);
// console.log(input.indexOf(max) + 1);