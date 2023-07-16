// https://www.acmicpc.net/problem/10818
// 최대값과 최소값 구하기 > reduce, 단순반복문 사용 방법도 있음


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let result = '';
let nums = input[1].split(' ').map(Number);

result += Math.min(...nums);
result += " ";
result += Math.max(...nums);

console.log(result);


/**
 * other type1
 */
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// let minVal = 1000001;
// let maxVal = -1000001;

// for(let i=0; i<n; i++) {
//     if(minVal > arr[i]) minVal = arr[i];
//     if(maxVal < arr[i]) maxVal = arr[i];
// }

// console.log(minVal, maxVal);


/**
 * other type2
 */
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// let minVal = data.reduce((a,b) => Math.min(a,b));
// let maxVal = data.reduce((a,b) => Math.max(a,b));

// console.log(minVal + ' ' + maxVal);