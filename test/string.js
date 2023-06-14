function stringLength(str) {
if(str.length<1 || str.length >10){
    throw new Error('string is ')
} 
return str.length
}

module.exports = stringLength;