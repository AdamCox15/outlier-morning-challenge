//Find the outlier
// The purpose of this is to find the outlying number so if the number is even and the rest are odd it'll pull the even number out of the array.

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)


const outliersArray = [160, 3, 1719, 19, 11, 13, -21]
const outlier = (arr) => {
    let arrEven = [];
    let arrOdd = [];
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
    return arrEven;
}
}
console.log(outlier(outliersArray));

// with ternaries
function findOutlier(integers) {
    let evens = []
    let odds = []
    integers.forEach(e => e % 2 === 0 ? evens.push(e) : odds.push(e))
    return odds.length === 1 ? odds[0] : evens[0]
  };