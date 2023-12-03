/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
    let answer = '';
    let arr = s.split('');
    let noDuplArr = [...new Set(arr)];
    
    answer = arr.filter((el, i)=>{
        let idx = noDuplArr.indexOf(el);
        if(idx != i) return el;   
    });

    
    if(answer.length > 0) return answer[0];
    else return '';
    
}