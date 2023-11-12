function solution(n) {
    // 1이 맨 첫번째.
    let binary = n.toString(2).split('');
    let len = binary.length;

    for(let i=1; i<len; i++) {
        if(binary[i] == 1) return i;
    }
}