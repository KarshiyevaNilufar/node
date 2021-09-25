const { read } = require('fs')
const Fs=require('fs/promises')
const Path=require('path')

async function readFile(path){
    let data=await Fs.readFile(path,'utf-8',(err,data)=>{
        if(err){

        }
    })
    data=await JSON.parse(data)
    return data
}
readFile(Path.join(__dirname,'data','data.json')).then(data=>{
    console.log(data.argv)
})