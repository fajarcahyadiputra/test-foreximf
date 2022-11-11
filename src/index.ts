import mongoose, { mongo } from 'mongoose';
import { app } from './app';
import { DatabaseConnectionError } from './errors/database-connection-error';
import * as dotenv from 'dotenv';
dotenv.config()

app.listen(3000, ()=> console.log(`Server Run At port 3000`))