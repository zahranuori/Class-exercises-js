function remove(input)
{
    if(input.length<=1)
        return input;
    if(input[0]==input[1])
        return remove(input.substring(1));
    else
        return input[0] +
            remove(input.substring(1));
}

let one = "ZAahrrrrrrraaaaa";
console.log(remove(one));

let  two = "Reeeeezzzaaaaa!!!";
console.log(remove(two));