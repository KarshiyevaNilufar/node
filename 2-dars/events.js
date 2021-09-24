const logger=require('./events_1')

logger.on('logged',(data)=>{
    console.log(data.message,data.num)
})

logger.log()
