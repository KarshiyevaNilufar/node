 function ekub(a, b) {
    if (!b) {
      return a;
    }
  
    return ekub(b, a % b);
  }
 module.exports=ekub