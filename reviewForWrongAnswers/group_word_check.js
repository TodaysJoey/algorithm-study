// https://www.acmicpc.net/problem/1316
// 그룹단어 체크하기: 이건 좀 어려우니 꼭 다시 한 번 복습하자

// 그룹 단어인지 체크하는 함수
function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length - 1; i++) {
        // 오른쪽 단어와 다르다면
        if (data[i] != data[i + 1]) {
            // 이미 등장한 적 있는 알파벳이라면
            if (setData.has(data[i + 1])) {
                return false;
            }
            else {
                setData.add(data[i + 1]);
            }
        }
    }
    return true;
}

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
    let data = input[i];
    if (check(data)) summary += 1
}

console.log(summary);