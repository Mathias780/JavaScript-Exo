function removeDuplicates(arr) { //This functon will find all values that are present more then once in array and remove all their duplicates
    let unique = [] //this will be the secret clone array that will stock the survivor

    for (let item of arr) { // this will do the all [i] (for(i=0; i<arr.length; i++)) thingy in a simple shorcut version.
    // we will count the items one by one

        if(!unique.includes(item)) { //includes() checks if the value is already inside. If yes -> skip it, if not -> keep it 
            //! = NOT it reverse true and false in this case so if it's true = false 
            //If the value already showed up once, we just ignore it and don’t put it in the new array
            
            unique.push(item)//We put the value one time into our new array so it survives, and all the duplicates get ignored

        }
    }

    return unique //we return our survivor array so the function gives us the cleaned result
}

let clothes = ["Jean","Jean","Jean","T-shirt","T-shirt","Sweat","Sweat","Cap","Cap"]

console.log(removeDuplicates(clothes))