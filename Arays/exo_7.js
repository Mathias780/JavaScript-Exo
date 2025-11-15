function reverseWords(sentence) {// This function will take a variable that contains a sentence and reverse the placement of the words.

    let words = sentence.split(" ")//i never seen this but i guess we take the variable that will be name sentence and then we split the string 
    // by numbers of spaces so it will look the sentence and be like oohh there is a space here that means it's a new word

    let reverseWords = words.reverse() // do the actual words flipping this will give ("programing","love","i")

    return reverseWords.join(" ") //this will stop differencing each word has string and form a sentence like we had in our variable

}

let mySentence = "I love programming"

console.log(reverseWords(mySentence))