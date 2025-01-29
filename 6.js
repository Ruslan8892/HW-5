let array = ['aaaa', 'dddd', 'bbbb'];
array.splice(1, 2,'cccc');
console.log(array);
let arr = [1, 2, 3];
function splice(arr) {
    arr.splice(1, 2, 4);
}
splice(arr);
console.log(arr);