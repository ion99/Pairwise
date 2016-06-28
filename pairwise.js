function pairwise(arr, arg) {
  if (arr.length === 0){
    return 0;
  }
  var result = [];  
  for (var i = 0; i<arr.length; i++){
    for (var j = i+1; j<arr.length; j++){
      if (arr[i] + arr[j] === arg && result.indexOf(i) === -1 && result.indexOf(j) === -1){
      result.push(i, j);
      }
    }
  }
  return result.reduce(function(a, b){ return a + b; });
}