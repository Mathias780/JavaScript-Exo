function isSorted(arr){//isSorted() will check if each value is in the right order compared to the next one
    for(let i = 0; i < arr.length -1;i++) {//The loop goes through each element of the array, but stops at arr.length - 1 because we don’t need to check the very last element
        //  we always compare the current element with the one after it

        if(arr[i] > arr[i + 1]) {//If the next number isn’t bigger than the one I’m checking, then the array isn’t in order so we return false immediately
            return false
        }
    }
    
    return true //If the loop never found anything out of order, then the whole array is sorted — so we return true
}

let NoneSortedNumList = [1,5,4,20,3,6]

let sortedNumList = [1,2,3,4,5,6]

console.log(isSorted(NoneSortedNumList)) //false
console.log(isSorted(sortedNumList)) //True