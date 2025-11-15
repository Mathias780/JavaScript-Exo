function mergeArrays(arr1,arr2) { //this function will combine both arrays into one big array (let arr1 represent a future array) and same for arr2.  
    
    let merged = [] //This where our 2 merged arrays will go

    for(let i = 0; i < arr1.length ; i++) { //look at our array elements and copy paste them into our empty merge variable
        merged.push(arr1[i])
    }

    for(let i = 0; i < arr2.length ; i++) { // and then we do the same for the second array so it will appear after our first
        merged.push(arr2[i])
    }


    return merged // then we sent merged into the wild so we can use our function proprely
}


let waterBottles = ["Volvic","Vittel","Evian","Cristaline"] //arr1

let waterBottlesPrice = ["2,50$","1,60$","2$","1$"] //arr2


console.log("------New Run---------")
console.log(mergeArrays(waterBottles,waterBottlesPrice)) //depending on how we place them of course the postion will change


