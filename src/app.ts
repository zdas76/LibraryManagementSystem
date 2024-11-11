import { Application, NextFunction, Request, Response } from "express"
import express from 'express';
import cors from 'cors';
import globalErrorHandler from "./app/middlwares/globalErrorHandler";
import { StatusCodes } from "http-status-codes";
import router from "./app/routes";

const app:Application = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());

app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to visite Library Management System!')
})

app.use('/api/', router)

app.use(globalErrorHandler)

app.use((req: Request, res:Response, next:NextFunction)=> {
  res.status(StatusCodes.NOT_FOUND).json({
    succcess: false,
    message: "Api Not Found",
    error: {
      path: req.originalUrl,
      message: "Your requesed path is not found"
    }
  })
})


export default app;