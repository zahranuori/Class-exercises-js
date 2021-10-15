const numberArray = [1, 3, 3, 7, 9, 0, 3, 7, 9, 11, 9 ];

const count = numberArray.reduce( (prev, current) => {
    prev[current] = (prev[current] || 0) + 1 ;
    return prev;
} , {})

console.log(count)