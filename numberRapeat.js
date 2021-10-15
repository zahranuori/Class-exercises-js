const a = [9,11,7,21,9,119,21,21,0]

function countDuplicate(a){
    let counts = {}

    for(let i =0; i < a.length; i++){
        if (counts[a[i]]){
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }
    for (let prop in counts){
        if (counts[prop] >= 2){

        }
    }
    console.log(counts)
}

countDuplicate(a)
