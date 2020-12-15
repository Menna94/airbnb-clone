import express from 'express'
import dotenv from 'dotenv'
const app = express();

app.use(express.json());
dotenv.config();





const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));