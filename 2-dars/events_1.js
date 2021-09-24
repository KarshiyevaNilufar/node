const EventEmitter=require('events')

class Logger extends EventEmitter{
    log(){
        this.emit('logged',{
            message:'hello world',
            num:1
        })
    }
}

module.exports = new Logger()
