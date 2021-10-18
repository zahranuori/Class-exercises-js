// function searchWord(string1 , string2) {
//     let count=0;
//     for(let i=0;i< string1.length;i++){
//         for(let z=0;z< string2.length;z++){
//             if (string2[z] != string1[i+z]){
//                 break;
//             }
//             if (z === string2.length -1){
//                 count++;
//
//             }
//         }
//
//     }
//     return count
// }
//
// console.log(searchWord('zahra' , 'zah'))


// ----------------------   hello world   --------------------------------

const wordSearch = (str1 , str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string')
        return -1
    if(str2.length > str1.length)
        return -1
    for (let i = 0 ; i <= str1.length - str2.length ; i++) {
        let temp = str1.substr(i , str2.length);
        if (temp === str2) {
            return i;
        }
    }
    return -1
}

console.log(wordSearch('reza zahra' , 'zahra'))