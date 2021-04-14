function filterLongWords(sentence, n) {
    //Solution here
    let sentenceArray = sentence.split(" ");
  
   return sentenceArray.filter(word => word.length > n);
  }