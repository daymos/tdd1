(function () {

  describe('Give it some context', function () {

    describe('maybe a bit more context here', function () {

      it('if string has no length return zero', function () {
        expect(add('')).toBe(0);
      });

      it('if string has one number returns the number', function(){
        expect(add('3')).toBe(3);
      })

      it('function should be able to accept up to 3 numbers as arguments', function(){
          expect(add('1,2')).toBe(3)
      })

      it('function should be able to accept any number of numbers', function(){
        expect(add('1,2,3,4,5,6')).toBe(21)
      })

      it('function should be able to accept numbers delimited by newline', function(){
        expect(add('1\n2\n3,4')).toBe(10)
      })

      it('test input "1,\n"', function(){
        expect(add('1,\n')).toBe(1)
      })
      it('test delimiter {', function(){
        expect(add('//[{]\n1{2{3')).toBe(6)
      })
      it('deals with negative numbers', function(){
        expect(add('3,-3,5,-7')).toBe('negatives not allowed -3,-7')
      })
      it('deals with numbers bigger then 1000', function(){
        expect(add('3,1001')).toBe(3)
      })
      it('can handle multiple delimiters of length greater than 1', function(){
        expect(add('//[{][op]\n1{2{3op5')).toBe(11)
      })

    });
  });
})();
