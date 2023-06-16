const express=require('express');
const mongoose=require('mongoose');
const devuser=require('./devusermodel');
const jwt=require('jsonwebtoken');
const middleware =require('./middleware')
const cors=require('cors')

const app= express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
    credentials: true,
  }));
  
mongoose.connect('mongodb+srv://srinureddy:srinureddy@cluster0.nwxf3wp.mongodb.net/?retryWrites=true&w=majority',{
    // useNewUrlParser:true,
    // userUnifiedTopology:true
})
.then( ()=> console.log('dB connected ...!')
).catch(err =>console.log(err))

app.use(express.json())
app.post ('/register',async(req,res)=>{
  
   try{
    const { fullname,email,mobile,password,confirmpassword }= req.body;
    const exist=await devuser.findOne({email});
    if(exist){
        return res.status(400).send('user allready registered')
    }
    if(password != confirmpassword){
        return res.status(403).send('Password invalid');
    }
    let newUser =new devuser({
        fullname,email,mobile,password,confirmpassword
    })
    newUser.save();
    return res.status(200).send("User Register..!")
   } 
   catch(err){
    console.log(err);
    return res.status(500).send('server error')
   }
})

app.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;
        const exist=await devuser.findOne({email});
        if(!exist){
            return res.status(400).send('User not Exist')

        }
        if(exist.password != password){
            return res.status(400).send('Password invalied')
        }
        let payload={
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,"jwtPassword",{expiresIn:360000000},
        (err,token)=>{
            if(err) throw err
            return res.json({token})
        }
        )
    }
    catch(err){
        console.log(err);
        return res.status(500).send('server error')
       }
})

app.get('/allusers' ,async(req,res)=>{
    try{
        let allusers=await devuser.find();
        return res.json(allusers);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('server error')
       }
})
app.listen(5000,()=>console.log("Server running .....!"))