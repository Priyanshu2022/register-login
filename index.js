const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')


dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true },()=>{
    console.log('connected to mongodb')
});

// converts post requests into json
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello');
})
app.use('/api/auth',authRoute);

app.listen(3000,()=>{
    console.log('listning at port 3000')
})