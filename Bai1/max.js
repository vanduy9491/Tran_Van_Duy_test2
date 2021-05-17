function findMax(arr){
    let max = arr[0];
    let size = arr.length;
    for (let i = 1; i < size; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max
}




