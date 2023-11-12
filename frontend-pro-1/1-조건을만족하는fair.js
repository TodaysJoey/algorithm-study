function solution(nums, d) {
    let answer = 0;
    let len = nums.length;

    for(let i=0; i<len; i++) {
        let start = nums[i];

        for(let j=i+1; j<len; j++){
            if(start == nums[j] && start%d == 0) answer++;
        }
    }
    return answer;
}