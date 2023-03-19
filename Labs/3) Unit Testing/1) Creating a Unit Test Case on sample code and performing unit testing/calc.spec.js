const summing = require('./calc');
// const decideoperation = require('./calc');



test('adds 2 , 3 gives 5',()=>{
expect(summing(2,3)).toBe(5)
});


// describe('decideoperation', () => {
//   it('should return the addition operator when given "+"', () => {
//     expect(decideoperation('+')).toBe('+');
//   });

//   it('should return the subtraction operator when given "-"', () => {
//     expect(decideoperation('-')).toBe('-');
//   });

//   it('should return the multiplication operator when given "x"', () => {
//     expect(decideoperation('x')).toBe('x');
//   });

//   it('should return the division operator when given "/"', () => {
//     expect(decideoperation('/')).toBe('/');
//   });

//   it('should return the modulo operator when given "%"', () => {
//     expect(decideoperation('%')).toBe('%');
//   });
// });
