function solution(s) {
    let sArr = s.split('');
    let len = sArr.length;
    let wordSet = new Set();
    let word = '';
    for(let i=0; i<len; i++) {
        if(word.indexOf(sArr[i]) < 0) {
            word += sArr[i];
        } else {
            wordSet.add(word);
            word = sArr[i];
        }
    }

    wordSet.add(word);
    let max = 0;

    for(const el of wordSet) {
        if(max < el.length) max = el.length;
    }

    return max;

    
}