const router=require('express').Router();

router.get('/',(req,res)=>{
    res.send('we are in router');
})

module.exports=router;