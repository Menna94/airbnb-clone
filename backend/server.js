import express from 'express'
import dotenv from 'dotenv'
const app = express();
import placeRoutes from './routes/placeRoutes.js'
import DBConnection from './config/db.js'

app.use(express.json());
dotenv.config();

DBConnection();

app.use('/places',placeRoutes);





const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));