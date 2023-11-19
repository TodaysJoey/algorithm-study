function solution(S) {
    let arr = S.split('');
    let rArr = [...arr].reverse();

    if(JSON.stringify(arr) == JSON.stringify(rArr)) return 1;
    else return 0;
}