function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let lPointer = 0;
  let rPointer = 0;
  let mergedArray = [];
  while (mergedArray.length !== left.length + right.length) {
    if (!left[lPointer]) {
      mergedArray = mergedArray.concat(right.slice(rPointer));
    }
    if (!right[rPointer]) {
      mergedArray = mergedArray.concat(left.slice(lPointer));
    }
    if (left[lPointer] < right[rPointer]) {
      mergedArray.push(left[lPointer]);
      lPointer++;
    } else if (right[rPointer] < left[lPointer]) {
      mergedArray.push(right[rPointer]);
      rPointer++;
    }
  }
  return mergedArray;
}
