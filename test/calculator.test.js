const calculator = require('./calculator');

describe('ADD',()=>{

test('1+2 should return 2', ()=>{
    expect(calculator.add(1,2)).toBe(3);
})

test(' 1 add 3 should not be 5', ()=>{
    expect(calculator.add(1,3)).not.toBe(5);
})

})


describe('SUb',()=>{

test('2-1 should return 1', ()=>{
    expect(calculator.subtract(2,1)).toBe(1);
})

test(' 1 substract 3 should not be 2', ()=>{
    expect(calculator.subtract(1,3)).not.toBe(2);
})

test('1-2 should return -1', ()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
})

})

describe('divide',()=>{

test('2/1 should return 2', ()=>{
    expect(calculator.divide(2,1)).toBe(2);
})

test('2/3 should not be 1', ()=>{
    expect(calculator.divide(2,3)).not.toBe(1);
})

test('6/2 should return 3', ()=>{
    expect(calculator.divide(6,2)).toBe(3);
})

});

describe('Multiply',()=>{

test('2*2 should return 4', ()=>{
    expect(calculator.multiply(2,2)).toBe(4);
})

test('2*6 should not be 12', ()=>{
    expect(calculator.multiply(2,6)).not.toBe(13);
})

test('3*2 should return 6', ()=>{
    expect(calculator.multiply(3,2)).toBe(6);
})

});