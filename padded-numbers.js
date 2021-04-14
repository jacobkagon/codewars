function solution(value){
    //...
    //if the number is five digits, return number, else add a zero in front
    
    const valueArr = value.toString().split("");
    if(valueArr.length === 5) {
      return `Value is ${value}`;
    } 
      while(valueArr.length < 5){
     valueArr.unshift('0');
      
  }
    
  return `Value is ${valueArr.join('')}`
    
  }