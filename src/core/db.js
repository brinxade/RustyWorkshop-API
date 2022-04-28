import mongoose from 'mongoose';
import {Logger} from './logger.js'

let logger = new Logger("[DB]");

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
	} catch (error) {
		logger.err(error.message);
		process.exit(-1);
	}
};

connectDb();