function filterEven(arr) {
    let evenNumbers = [] //it create a empty array where we will stock all the even numbers !

    for (let i = 0; i < arr.length; i++) { //this will just go through each number of our array
        if(arr[i] % 2 === 0) {//if our for() loop that is counting numbers look at a number it will do a calcul to see if it's even or odd !
            evenNumbers.push(arr[i]) //if the number is even put it in our new array
        }
    }

    return evenNumbers // that's it there we have it. we sent evenNumbers into the js file so our function works the way it's supposed too
}


let myNumbers = [3,2,10,5,4,8,9,25,23,100]

console.log(filterEven(myNumbers))