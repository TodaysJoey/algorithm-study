// 가장 많이 등장하는 수 리턴
// 가장 많이 등장하는 수가 여러 개라면, 그 중에 가장 작은 수 리턴

function solution(s) {
    let arr = s.split('');
    let len = arr.length;
    let obj = {};

    for(let i=0; i<len; i++) {
        if(arr[i] in obj) obj[arr[i]]++;
        else obj[arr[i]] = 1;
    }

    let answer = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);

    return +answer.slice(0,1).toString();
}