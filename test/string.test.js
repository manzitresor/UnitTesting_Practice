const stringLength = require('./string')

test('string length', () => {
 expect(stringLength('manzi')).toEqual(5)
})

test('string which is less to zero',() => {
    expect(()=> {stringLength('')}).toThrow();
})

test('string which is greater to 10',() => {
    expect(()=> {stringLength('manzi tresor')}).toThrow();
})