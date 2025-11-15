function sentenceShorter(sentence,maxlength) {// we look at a sentence if the words in it are more then the number we set then we short it and add ...
    if (sentence.length <= maxlength) { //the if statement will look at our sentence and be like: Is the string short enough?
        return sentence
    }else {//if the sentence is took long then we short it 
        let cut = sentence.slice(0,maxlength) //We take the sentence and keep only the characters from index 0 up to maxLength value everything after that gets cut off

        return cut + "..."//We glue the cut version with '...' so the user knows the sentence was cut
    }
}

let sentenceTest = "I love drawing and reading"

console.log(sentenceShorter(sentenceTest,10)) //we have to keep in mind that Js counts the space has an index so the result will be 
// "I love dra..."
