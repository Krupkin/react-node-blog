import express from 'express';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

// WQKTkhLI2zXVpAQF ___ mongoose password

mongoose.connect(
    'mongodb+srv://admin:WQKTkhLI2zXVpAQF@cluster0.xgsk80b.mongodb.net/?retryWrites=true&w=majority'
).then(()=> {
    console.log("DB is OK")
}).catch((err) => {
    console.log("DB error", err)
})

//   "type": "module", 
  // для возможности подключения модулей в package.json


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")

});



app.post('/auth/login', (req, res) => {

    const token = jwt.sign({
        email: req.body.email,
        name: "Вася"
    }, 'password')

    res.json({
        success: true,
        token
    })
})




app.listen(4444, (err) => {
    if(err){
        return console.log(err)
    }
    return console.log("server is starting")
})