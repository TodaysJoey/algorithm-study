// p 문자열의 길이 < t 문자열의 길이
// t에서 p문자열의 길이와 동일한 부분문자열 추출
// 추출한 값들과 p를 비교해 작거나 같은 수의 개수를 찾음
// +를 붙이면 숫자가 됨
function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}