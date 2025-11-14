let subscriber = ["Tommy","Mark","Lisa"] // Our array of subscriber 

let WelcomeList = [] // final result array: each subscriber will become "Welcome NAME"

for (let i = 0; i < subscriber.length ; i++) { // here our loop will look for each element of our subscriber array then display them one by one and stop before reaching index 3 in this case if we put i <= subscriber.length this will not work.

    WelcomeList.push("Welcome " + subscriber[i]) //welcomeList.push will allow us to add an element to the end of our welcomeList array then we add a string plus one of the subscriber element into it so each loop we go to the other subscriber element so for exemple the first one will be "Welcome Tommy"

}

console.log(WelcomeList) //then we display the empty array who is been combined with our subscriber array in the loop !


// final result: [ 'Welcome Tommy', 'Welcome Mark', 'Welcome Lisa' ] (we can add has many index has we want into subscriber and it will be correctly transfomed.)


// i did the exercice the wrong way so here is the new one :) follow basically the same principale

/*

let numbers = [2,4,10]

let doubled = []

/*
for(let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2) // we take the each index in order multiply it by 2 then add the result in our empty array
}
*/
//console.log(doubled)



//------------- Optimised version --------------//

/*

for(let a of numbers) {    //shortcut of what was done above 
    doubled.push(a * 2) 
}

console.log(doubled)

*/

//------------ Even More Optimised version :(-------------//

let numbers = [2,4,10]

let doubled = numbers.map(n => n *2) // dosen't make sense to me but i guess it takes the array of numbers look through the index's and multiply them by 2 directly because of .map syntax 

console.log(doubled)