function solution(S) {
    
    let num = parseInt(S, 2); //10진수로 변환
    let cnt = 0;

    while(num != 0) {
        cnt++;
        num = (num%2 == 0) ? num/2 : num-1;
    }

    return cnt;
}