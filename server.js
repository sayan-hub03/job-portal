//packages import
// const express = require('express');
import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
//security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// files import
import connectDb from './config/db.js';
// routes import
import authRoutes from './routes/authRoutes.js';
import testRoutes from './routes/testRoutes.js';
import errorMiddleware from './middlewares/errorMiddlewares.js';
import jobRoutes from './routes/jobsRoutes.js';
import userRoutes from './routes/userRoutes.js';


//DOTENV config
dotenv .config()

//mongodb connection 
connectDb();

//create rest object
const app = express();
const PORT = process.env.PORT ||8080 ;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// creating routes
app.use("/api/v1/test" , testRoutes)
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/job" , jobRoutes)

//validation middleware
app.use(errorMiddleware);

//listen
app.listen(PORT , ()=>{
    console.log(`listen in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})
