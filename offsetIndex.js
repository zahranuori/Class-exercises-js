let offset = [1, 2, 3, 4, 5,], index = 4;
for (let i = index; i < offset.length; i++)
    offset.unshift(offset.pop());
console.log(offset);
