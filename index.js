"use strict"
var jvIsArray = require('jv-is-array')

var jvObjectFilter = function(obj, filter){
    
    var keys=[], emptyObj = {}
    
    if(!filter) return emptyObj

    if(typeof filter == 'string') {
         keys = String.prototype.split.call(filter, / +/)
    }
    else if(jvIsArray(filter)) {
        keys = filter
    } 
    if(!keys.length) return emptyObj
    
    return keys.reduce(function(ret, key){
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            ret[key]  = obj[key]
        }
        return ret
    }, {})

}

module.exports = jvObjectFilter


