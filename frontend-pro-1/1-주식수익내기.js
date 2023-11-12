function solution(A) {
    // 제일 싸게 사서
    // 그나마 가장 큰 이익일 때를 찾는다.
    let len = A.length;
    let maxProfit = 0;
    let minPrice = A[0];

    for(let i=0; i<len; i++) {
        let profit = A[i] - minPrice;

        if(profit > maxProfit) maxProfit = profit;
        if(A[i] < minPrice) minPrice = A[i];
    }

    return maxProfit;

}