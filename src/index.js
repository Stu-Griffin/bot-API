import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import AppRouter from './routes/route.js';
import connectDB from './config/connectDB.js';

const app = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE']}));

connectDB();
router.init();

app.listen(process.env.PORT, () => {
    console.log('Server Running!');
});