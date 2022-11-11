import express from 'express';
import {json, urlencoded} from 'body-parser';
import "express-async-errors";
import cookieSession from 'cookie-session';

//import router
import {
    calculateBonus, 
    migrate, 
    signup,
    homeRouter
} from './routes';
import {errorHandler} from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';


const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views')
app.set("trust proxy", true)
app.use(json({limit:"50mb"}))
app.use(urlencoded({extended: false}))
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "dev"
}))

//init router
app.use("/",calculateBonus)
app.use("/",migrate)
app.use("/",signup)
app.use("/",homeRouter)
app.all("*", async(req,res, next) => {
    throw new NotFoundError()
})
app.use(errorHandler)

export {app};