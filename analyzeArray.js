function analyzeArray(arr) {
  const sum = arr.reduce((total, current) => {
    return total + current;
  });
  const average = sum / arr.length;
  const sortedArr = arr.sort();
  const min = sortedArr[0];
  const max = sortedArr[arr.length - 1];
  const length = sortedArr.length;
  
  return {average, min, max, length};
}

module.exports = analyzeArray;
