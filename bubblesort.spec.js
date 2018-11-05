describe('Bubble Sort', function(){
    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough();
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
      expect(swap.calls.count()).toEqual(0);
    });
    it('handles an array with one item', function(){
        expect( bubbleSort( [2]) ).toEqual( [2] );
        expect(swap.calls.count()).toEqual(0);
    });
    it('handles an array with two items', function(){
        expect( bubbleSort( [42, 8]) ).toEqual( [8, 42] );
        expect(swap.calls.count()).toEqual(1);
    });
    it('handles an array with multiple items', function(){
        expect( bubbleSort( [43, 12, 65, 2]) ).toEqual( [2, 12, 43, 65] );
        expect(swap.calls.count()).toEqual(5);
    });
  });