// let offset = [1, 2, 3, 4, 5,], index = 4;
// for (let i = index; i < offset.length; i++)
//     offset.unshift(offset.pop());
// console.log(offset);

function moveArrayItemToNewIndex(arr, offset, index) {
    if (index >= arr.length) {
        let k = index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(index, 0, arr.splice(offset, 1)[0]);
    return arr;
};
console.log(moveArrayItemToNewIndex(["a","b","c","d"], 2, 1));
