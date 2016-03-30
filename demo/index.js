var jvOF = require("../")
var log = console.log

var a = {foo: 123, bar: 134}
log(jvOF(a, 'foo '))

var b = [1, 2, 3]
log(jvOF(b, '1 2'))

var c = {foo: 1, bar: 2, cb: function(){}}

log(jvOF(c, 'fo bar cb'))

