import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';



const connectToDatabase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,  // Corrected typo here
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default connectToDatabase;



