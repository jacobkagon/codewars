function stray(numbers) {
    //check if the number each number is the same or different from the previous one;
  let strayNumber;
    let numArr = [];
    
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] === numbers[i + 1]) {
        numArr.push(numbers[i]);
        numArr.push(numbers[i + 1]);
    
        
      }
       if(!numArr.includes(numbers[i])) {
      strayNumber = numbers[i];
    }
        }
  
  
    return strayNumber;
  }