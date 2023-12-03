function solution(history, infected) {
    let iIdx = history.indexOf(infected);
    let oIdx = history.indexOf(infected * (-1));
    let temp = history.slice(iIdx+1, oIdx-1);

    temp = temp.map(el => Math.abs(el));
    temp.sort((a,b)=>{
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });

    let tSet = new Set(temp);
    let answer = [...tSet];

    return answer;
}