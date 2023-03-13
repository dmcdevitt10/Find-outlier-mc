function findOutlier(array){
    let even = []
    let odd = []
    let outlier = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }
    }
    if(even.length === 1){
        for(let i = 0; i < even.length; i++){
            outlier += even[i]
        }
    }else{
        for(let i = 0; i < odd.length; i++){
            outlier += odd[i]
        }
    }
    return outlier
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))