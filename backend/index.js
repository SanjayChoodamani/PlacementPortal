import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from "mongoose";
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Allow requests from your frontend origin
const corsOptions = {
    origin: 'http://localhost:5173', // Replace this with your frontend's address
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
// app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

// Routes
app.use('/auth', authRoutes);


// app.get('/dashboard', (req, res)=>{
//     res.send("hello")
// })
// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });



