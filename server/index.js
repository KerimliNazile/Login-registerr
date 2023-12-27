import express from 'express';
import  mongoose  from 'mongoose';
import  dotenv  from 'dotenv';
import cors from 'cors'
import router from './router/users.js';
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors)

app.use("/",router)

const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT



mongoose.connect(url).then(()=>console.log("connect")).catch((error)=>console.log(error))


app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})