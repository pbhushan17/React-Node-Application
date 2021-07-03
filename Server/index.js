import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todo.js'

const app = express();
dotenv.config();
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/todo', todoRoutes)

app.get('/',(req,res)=> {
    res.send('Welcome To Server.');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb, { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log(`server is running on port ${PORT}`)
}).catch(err => {
    console.log(err);
})

app.listen(5000);