function solution(s) {
    let answer = true;
    let strArr = s.trim().split('');
    let fullLen = 'abcdefghijklmnopqrstuvwxyz'.length;

    let strSet = new Set(strArr);

    if(strSet.size != fullLen) answer = false;

    return answer;
}