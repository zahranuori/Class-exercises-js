function copyNumber(number) {
    let result = 0
    for (let i = 0; i < number; i++) {
        result += ((10 ** i) * number)
    }
    return result
}

function repeatNumber(number) {
    let numb = number.toString().split('')
    for (let item of numb) {
        console.log('%s', item, copyNumber(item))
    }
}

console.log(repeatNumber(19735))