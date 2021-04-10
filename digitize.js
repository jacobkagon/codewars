function digitize(n) {
    let newArr = [];
    
    let array = String(n).split("")
    for(let i = 0; i < array.length; i++) {
      newArr.push(+array[i])
    }
    
    return newArr;
}  