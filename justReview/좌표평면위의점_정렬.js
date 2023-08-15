// https://www.acmicpc.net/problem/11650

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i=1; i<=n; i++) {
  arr.push(input[i]);
}

arr.sort(function(a,b){
  let [x1,y1] = a.split(' ').map(Number);
  let [x2,y2] = b.split(' ').map(Number);
  
  if(x1!==x2) return x1-x2;
  else return y1-y2;
});

let answer = '';
for(let i=0; i<arr.length; i++) {
  answer += arr[i] + '\n';
}

console.log(answer);