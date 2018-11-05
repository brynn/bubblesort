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
  while (lPointer < left.length && rPointer < right.length) {
    if (left[lPointer] < right[rPointer]) {
      mergedArray.push(left[lPointer]);
      lPointer++;
    } else {
      mergedArray.push(right[rPointer]);
      rPointer++;
    }
  }
  // add on the rest of one array if it's bigger
  if (rPointer < right.length) {
    for (rPointer; rPointer < right.length; rPointer++) {
      mergedArray.push(right[rPointer]);
    }
  }

  if (lPointer < left.length) {
    for (lPointer; lPointer < left.length; lPointer++) {
      mergedArray.push(left[lPointer]);
    }
  }

  // if (!left[lPointer]) {
  //   mergedArray = mergedArray.concat(right.slice(rPointer));
  //   break;
  // }
  // if (!right[rPointer]) {
  //   mergedArray = mergedArray.concat(left.slice(lPointer));
  //   break;
  // }
  return mergedArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    debugger;
    let returnedArray = split(array);
    let left = returnedArray[0];
    let right = returnedArray[1];
    return merge(mergeSort(left), mergeSort(right));
  }
}

mergeSort([4, 5, 3, 1, 2]);
