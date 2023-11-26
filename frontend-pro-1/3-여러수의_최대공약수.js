function solution(A) {
    let getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2);

    let res = A.reduce((acc, cur)=>{
        
        return getGCD(acc, cur);
    });
    
    return res;
}