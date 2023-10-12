function TripletsWithZeroSum(arr) {
    const triplets = [];
  
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            triplets.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
  
    return triplets;
  }
  
  const list = [-1, 0, 1, 2, -1, -4, -3, +1, -2, +2];
  const result = TripletsWithZeroSum(list);
  
  console.log("Triplets that sum to zero:");
  console.log(result);
  