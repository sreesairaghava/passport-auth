const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,({
    useNewUrlParser:true,
    useUnifiedTopology:true
})).then(console.log('connnect success')).catch((error)=>{
    console.log(error)
})
const db = mongoose.connection
db.on('error',(err)=>console.log(err))
db.on('open',()=>console.log('MongoDB connected'))
//Add Middlewares
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.json())

//Import routes and use 
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')

app.use('/api/user/register',registerRoute)
app.use('/api/user/login',loginRoute)


//Port
const port = process.env.PORT || 4040;
//App listen on Port
app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`)
})