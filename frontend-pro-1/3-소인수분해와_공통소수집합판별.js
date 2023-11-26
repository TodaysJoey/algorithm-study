function solution(A, B) {
    let answer = 0;

    let result = [];
    let divisor = 2;
  
    while (A >= 2) {
        if (A % divisor === 0) {
            result.push(divisor)
            A = A / divisor;
        }
        else {
            divisor++;
        }
    }

    let result2 = [];
    divisor = 2;
    
    while (B >= 2) {
        if (B % divisor === 0) {
            result2.push(divisor)
            B = B / divisor;
        }
        else {
            divisor++;
        }
    }

    let answerA = JSON.stringify([...new Set(result)]);
    let answerB = JSON.stringify([...new Set(result2)]);

    if(answerA === answerB) answer = 1;
    else answer = 0;

    return answer;
}