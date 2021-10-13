const router=require('express').Router()
router.get('/',(req,res)=>{
    res.send('ok')
})

module.exports={
    path:'/api',
    router
}