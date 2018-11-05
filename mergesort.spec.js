describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 5, 8], [2, 6])).toEqual([1, 2, 5, 6, 8]);
    expect(merge([3, 7, 23, 42], [2, 5, 9])).toEqual([2, 3, 5, 7, 9, 23, 42]);
  });
});

describe('Merge sort function', function() {
  it('sorts an array using merge sort', function() {
    console.log(typeof toEqual());
    expect(mergeSort([4, 5, 3, 1, 2]).toEqual([1, 2, 3, 4, 5]));
  });
});
