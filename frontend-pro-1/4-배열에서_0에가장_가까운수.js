function solution(arr) {
    let answer = Math.max(...arr);
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < answer) answer = arr[i];
    }

    return answer;
}