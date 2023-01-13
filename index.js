const express  = require('express')
const app = express();
const port = 8080 || process.env.port
const cors  = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = express.Router();
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())


app.use("/",require('./routes/user.route'))
app.use("/",require('./routes/main.route'))


mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'))     
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`))

app.listen(port,()=>{
    console.log("port running on "+ port)
    
})