//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

function divCon(x){
    let strings = 0;
    let nums = 0;
    x.map(type => {
      if(typeof type === 'number') {
         nums += type
      } else if(typeof type === 'string') {
        strings += +type
      }
    })
    const result = nums - strings
    return result
  }