let places = ["Park","Beach","forest","city"]

function reverseAray(a) { // we set a function that has objectif to reverse the order of a array we set a varaible name that just simulite any varaible we put in the future
    let reversed = [] // an empyt array that will use into our inner loop

    for(let i = a.length -1; i >= 0; i--) { // we do a for loop that unlike what we precently did dosent add one by one until reaching the value we want but does the inverse
        reversed.push(a[i]) //then we push our varaible into the reversed empty aray plus the syntax we used earlier with the variable i 
    }

    return reversed // sent reversed into the js file so we can use our functions properly
}

console.log(reverseAray(places)) //the function mechnasimes and in the parenthese what wich variable we want to display