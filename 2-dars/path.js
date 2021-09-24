const path=require('path')

console.log(__dirname)
console.log(__filename)
console.log(path.basename('path.js'))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

// let p=path.join(__dirname,'..','path.js')
// console.log(p)