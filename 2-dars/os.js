const os=require('os')

const totalMem=os.totalmem()
const freeMem=os.freemem()
const upTime=os.uptime()
const userInfo=os.userInfo()

console.log((totalMem/1024)/1024) //on megabytes
console.log((freeMem/1024)/1024) //on megabytes
console.log(upTime/60/60) //in hour
console.log(userInfo)
