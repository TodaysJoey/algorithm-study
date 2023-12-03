function solution(n) {
    let answer = 0;

    for(let i=0; i<=n; i++) {
        let num = i.toString(2);
        let redArr = num.split('').filter((el)=> el == 1);

        answer += redArr.length;
    }

    return answer;
}