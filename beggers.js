function beggars(values, n){
    var outputValues = [];
    for (var i = 0; i < n; i++) {
      var sum = 0;
      for (var j = i; j < values.length; j += n) {
        sum += values[j];
      }
      outputValues.push(sum);
    }
    return outputValues;
  }