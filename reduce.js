const array = [1, 2, 3];
function total(arr) {
const sum = arr.reduce(function (previousValue, currentValue){
    return previousValue+currentValue}
, 0)
return sum
}
console.log(total(array));


// nebaigtas