
function tryRemoveFromArray(number, arr) {
    let check = arr.some(function (value1) {
        return value1 == number;
    });
    if (check) {
        for (let i=0; i< arr.length; i++) {
            if (arr[i] == number) {
                arr.splice(i, 1);               
            }
        }
        document.write(`${number} có trong mảng và tiến hành xóa <br>`)
        document.write(arr); 
    }
    else{
        document.write(`${number} không có trong mảng`)
        document.write(arr); 

    }

}
let arr = [1, 5, 3, 6, 9, 8, 4, 7, 8, 5, 1, 5, 3, 1, 2, 5];
document.write(`${arr}<br>`); 
tryRemoveFromArray(1, arr);