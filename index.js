
const express= require("express")
const cors= require("cors")
const dotenv= require("dotenv")
const connection=require("./db")
const userRoutes=require('./routes/users')
const authRoutes=require('./routes/auth')

dotenv.config();
connection();
const app= express();

//middlewares

app.use(express.json());
app.use(cors());

//routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)


//listening

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`listening to ${port}`);
})


