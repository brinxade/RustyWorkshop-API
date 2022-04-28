const mongoose = require('mongoose');
const Logger = require('./logger').Logger;

let logger = new Logger();

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		logger.info("Connected to MongoDB");
	} catch (error) {
		logger.err(error.message);
		process.exit(-1);
	}
};

connectDb();