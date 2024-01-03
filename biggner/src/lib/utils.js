const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
	try {
		if (connection.isConneted) {
			console.log("Using existing connection");
			return;
		}
		const db = await mongoose.connect(process.env.MONGO);
		connection.isConneted = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error("Something went worng");
	}
};
