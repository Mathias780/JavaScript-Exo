function mostFrequent(arr) { // the function will find wich value appears the most
    let counts = {} //A little storage box where Js will remember
    for(let item of arr) { //Here item will be each value of the array 
        if(counts[item]) { // and here i basicall asked Js if you have already seen this value note it 
            counts[item]++
        }else // if not theres is only one 
            counts[item] = 1
    }
    
    let maxCount = 0 // a variable set to remember the highest number of Ocurrences found so far
    let mostFrequent = null // a variable that will store the value that appears the most once we found it (it's sett has null because we didnt find it yet)

    for(let key in counts) { // this for loop we look through the count object we builded earlier 
        if(counts[key] > maxCount) {// So if the current value appears more then the previous maxium update the maximum count and the most frequent value
            maxCount = counts[key]
            mostFrequent = key
        }
    }

    //counts is the noteBook that writes each time a value appears so we dont return it 

    return mostFrequent //so we return mostFrequent because it is the acutal value with the highest score
}

let countries = ["Spain","Italy","Greece","Germany","Italy","Spain","Spain","Italy","Spain","Greece","Germany","Spain"]

console.log(mostFrequent(countries))//And then we print the function with array i want and bam we have the anserw to witch value appears the most.

//the winner Spain [5]