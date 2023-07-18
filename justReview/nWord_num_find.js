// https://www.acmicpc.net/problem/1152
// 단어의 개수를 구하는데, 단순하게 trim으로 공백을 지우고,
// 배열로 split한 후 배열 길이를 구하는 편이 간단하다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let sentenceArr = input[0].split(' ');
let nWord = 0;
for(let el of sentenceArr){
  if(el.length != 0){
    nWord += 1;
  }
}

console.log(nWord);


// // fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// // trim() 메서드는 문자열 양 끝의 공백을 제거한다. // 공백으로 구분된 단어의 개수 출력한다.
// let data = input[0].trim().split(" ");
// if (data == "") {
//     console.log(0);
// }
// else {
//     console.log(data.length);
// }