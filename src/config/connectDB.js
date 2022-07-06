import mongoose from 'mongoose';
import { tryCatchMiddlewareNotAPI } from '../middleware/index.js';

const connectDB = async () => tryCatchMiddlewareNotAPI(mongoose.connect(process.env.URL), 'Connected to DB');

export default connectDB;