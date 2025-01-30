let array1 = ['aaaa'];
let array2 = ['bbbb'];
let array = array1.concat(array2);
console.log(array);
let arr1 = [1, 2];
let arr2 = [3];
let arr = [];
function concat(arr1, arr2) {
    arr = arr1.concat(arr2);
}
concat(arr1, arr2);
console.log(arr);