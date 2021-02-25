function isPalindrome(line) {
    if(line.toString() === line.toString().split('').reverse().join('')) {
      return true
    } else { 
      return false
    }
   }