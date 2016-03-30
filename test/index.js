var expect = require('expect.js')

var jvOF = require('../')

describe('Test Suite', function(){
    it('simple', function(){
        var a = {foo: 123, bar: 134}
        expect(jvOF(a, ['foo'])).to.only.have.keys('foo')
    })

    it('complex', function(){
        var c = {foo: 1, bar: 2, cb: function(){}}
        expect(jvOF(c, 'foo ba cb')).to.only.have.keys('foo', 'cb')
    }),

    it('what if array', function() {
        var d = [1, 2, 3, 4]
        expect(jvOF(d, [1, 2])).to.only.have.keys('1', '2') 
    })
})
