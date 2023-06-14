const reverseString = require('./reverseString')

test('Reverse string function exist', ()=>{
    expect(reverseString).toBeDefined()
})

test('hello reverse as "olleh"', () => {
    expect(reverseString('hello')).toEqual('olleh')
})