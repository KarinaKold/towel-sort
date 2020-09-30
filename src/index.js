
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let a = matrix.reduce((result, arr, i) => {
    arr = i % 2 == 1 ? arr.reverse() : arr;
    return result.concat(arr);
  }, [])
  return a;
}
