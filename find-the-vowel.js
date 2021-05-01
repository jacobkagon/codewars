function vowelIndices(word){
    //your code here
    const vowels = ["a", "e", "i", "o", "u", "y"];
    const upperCaseVowels = ["A", "E", "I", "O", "U", "Y"];
    const result = [];
    
    let wordArr = word.split("");
    
    for(let i = 0; i < wordArr.length;i++) {
      if(vowels.includes(wordArr[i]) || upperCaseVowels.includes(wordArr[i])) {
        result.push(i + 1);
      }
    }
    return result;
  }