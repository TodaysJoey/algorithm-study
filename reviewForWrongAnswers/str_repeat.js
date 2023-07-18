// https://www.acmicpc.net/problem/2675
// s를 다시 한 번 split 하는 것을 틀렸음.
// split을 한 번만 하고, let [r,s]로 선언, 할당 하는 것이 코드가 짧은 것을 다시 볼 것
// charAt으로 문자를 얻어오고, repeat으로 추가 하는 것을 다시 한 번 기억!!!

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for(let i=1; i<=n; i++) {
  let r = input[i].split(' ')[0];
  let s = input[i].split(' ')[1].split('');

  let result = s.reduce((a,b) => {
    let str = '';
    for(let j=0; j<r; j++) {
      str += b;
    }
    return a+str;
  }, '');

  answer += (result+'\n');
}
console.log(answer);

// split 두 번보다 이 방법이 더 코드가 짧음
// 한 줄(line)씩 입력받기
// for (let i = 1; i <= testCase; i++) {
//     let [r, s] = input[i].split(" ");
//     let result = "";
//     // 현재 문자열의 각 문자를 하나씩 확인하며
//      for (let j = 0; j <= s.length; j++) {
    //      r번 반복한 문자열을 뒤에 이어붙이기
    //      result += s.charAt(j).repeat(r);
        // }
//     console.log(result); 
// }