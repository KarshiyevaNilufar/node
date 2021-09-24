const fs=require('fs')
const path=require('path')



// fs.mkdir(path.join(__dirname,'fs_ref'),(err)=>{
//     if(err) 
//            {
//             fs.writeFil(path.join(__dirname,'fs_ref','fs.txt'),'hello fs_ref',(error)=>{})

//            }
//      else {
//             fs.writeFile(path.join(__dirname,'fs_ref','fs.txt'),'hello fs_ref',()=>{})

//            }
           
// })

// fs.appendFile(path.join(__dirname,'fs_ref','fs.txt'),'from appendfile',()=>{})
// fs.readFile('./fs_ref/fs.txt',{encoding:'utf-8'},(err,data)=>{
//     if(!err){
//         // let file=Buffer.from(data).toString()
//         console.log(data)
//     }
// })

// fs.rename(path.join(__dirname,'fs_ref','fs.txt'),path.join(__dirname,'fs_ref','file.txt'),(err)=>{
//     if(err) console.log(err)
// })
// fs.unlink(path.join(__dirname,'fs_ref','fs.txt'),(err)=>{
//     if(err) console.log(err)
// })
// fs.readdir(path.join(__dirname,(err,files)=>{
//     if(!err){
//         files.forEach(file=>{
//             let filePath=path.join(__dirname,'fs_ref',file)
//             fs.unlink(filePath,()=>{})
//         })
//     }
// }))
