function filterLongWords(sentence, n) {
    //Solution here
    let sentenceArray = sentence.split(" ");
  
   return sentenceArray.filter(word => word.length > n);
  }
// without using .filter
  function filterLongWords(sentence, n) {
    //Solution here
    
    let sentenceArray = sentence.split(" ");
    let newWordArray = [];
    
    for(let i = 0; i < sentenceArray.length; i++) {
      if(sentenceArray[i].length > n) {
        newWordArray.push(sentenceArray[i]);
      }
    }
    return newWordArray;
  }