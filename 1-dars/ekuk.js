
function ekuk(a,b){
    const ekub=require('./ekub')
    return Math.abs(a * b) / ekub(a, b)
} 

 module.exports=ekuk
