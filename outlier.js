//Find the outlier
const outliersArray = [160, 3, 1719, 19, 11, 13, -21]
const outlier = (arr) => {
    let arrEven = []
    let arrOdd = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
        arrEven.push(arr[i])
    } else{
      arrOdd.push(arr[i]);
    }
}
if(arrEven.length > arrOdd.length){
    return arrOdd;
} else {
    return arrEven
}
}
console.log(outlier(outliersArray));