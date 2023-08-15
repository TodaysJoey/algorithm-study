function merge(arr, left, mid, right){
    let i = left;
    let j = mid+1;
    let k = left;

    while(i <= mid && j <=right) {
        if(arr[i] <= arr[j]) sorted[k++] = arr[i++];
        else sorted[k++] = arr[j++];
    }

    // 왼쪽 배열 처리 끝 = 오른쪽 배열 다 담아줌
    if(i > mid) {
        for(; j<=right; j++) sorted[k++] = arr[j];
    } else {
        // 오른쪽 배열 처리 끝
        for(; i<=mid; i++) sorted[k++] = arr[i];
    }

    for(let x=left; x<=right; x++) {
        arr[x] = sorted[x];
    }



    function mergeSort(arr, left, right) {
        if(left<right) {
            let mid = parseInf((left + right) / 2);
            mergeSort(arr, left, mid);
            mergeSort(arr, mid+1, right);
            merge(arr, left, mid, right);
        }
    }
}