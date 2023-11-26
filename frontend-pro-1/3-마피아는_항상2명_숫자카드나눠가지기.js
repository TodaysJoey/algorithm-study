function solution(members) {
    let res = {};
    let len = members.length;

    for(let i=0; i<len; i++) {
        if(!res[members[i]]) {
            res[members[i]] = [i];
        } else{
            let preVal = res[members[i]];
            preVal.push(i);
            res[members[i]] = preVal;
        }
    }

    let answer = [];

    for(const prop in res) {
        if(res[prop].length == 2) {
            answer = res[prop];
        }
    }
    
    return answer;
}