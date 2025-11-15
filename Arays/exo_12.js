function firstLetterUpercase(sentence) {

    let words = sentence.split(" ")//we did that already this will look for spaces in a string and that's how JS will know it's an other word

    let result = [] //an empty array that will store the desired version of our sentence

    for(let word of words) {//The loop takes each word one by one, so i can modify it before putting it into your new array
        let firstLetter = word[0].toUpperCase() //so basically here js treat a each letter has an index so since we know that we say the first index ake 0 for js put in upperCase
        let rest = word.slice(1).toLowerCase() //we have same principale here but we say if it's the second index or more put it in lowerCase

        let finalWord = firstLetter + rest
        //We glue the uppercase first letter with the rest of the word, and then we push that cleaned-up word into our new array to build the final result
        result.push(finalWord)
    }

    return result.join(" ")// merge everything back into a normal sentence
}

console.log(firstLetterUpercase("i lOvE pRograMMing")) //We get "I Love Programming"