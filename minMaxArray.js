const array = [3, 11, 23, 71, 91, 119, 5]

function max(prev, current) {
    if (prev > current) {
        return prev
    }
    return current
}

function min(prev, current) {
    if (prev > current) {
        return current
    }
    return prev
}

const maximum = array.reduce(max)
const minimum = array.reduce(min)

const arrayOne = [minimum, maximum]

console.log(arrayOne)