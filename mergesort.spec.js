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
  it('with 1 or fewer elements, returns sorted array', function() {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1000])).toEqual([1000]);
  });

  it('does the thing its supposed to do', function() {
    const sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
    expect(sorted).toEqual([-90, 1, 9, 18, 56, 1234, 1994]);
  });
});
