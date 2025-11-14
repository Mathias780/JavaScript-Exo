function countOccurences(arr,value) { // this function will basicaly count each time the same value will appear in the chosen array .
    let count = 0

    for(let i = 0; i < arr.length; i++) {//we look how many values they are in the chosen array and count them one by one. from index 0 to the last index
        if(arr[i] === value) { //if the element i'm currently looking at is exactly the same as the value im searching for then we do ...
            count++ // the count variable will start acutally counting :) so if it founds a match it will add 1 to the number of occurences.
        }
    }

    return count //sent our variable into the wild back to the Js file 
}

let animals = ["pony","wolf","lion","wolf","wolf","snake","pony","lion"]

console.log(countOccurences(animals, "wolf"))// so here i can see that i have both the array and the value i am looking for, and will directly show me how much times this value is present in my array.