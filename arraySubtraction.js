function subtraction (arrayOne,arrayTwo) {
    return arrayOne.filter(item => !arrayTwo.includes(item))
}
console.log(subtraction([1,2,3,7,6,9,11] , [1,4,5,11,19]))