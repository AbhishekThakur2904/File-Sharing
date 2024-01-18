import mongoose from 'mongoose';


const DBConnection = async () => {
const MONGODB_URL = `mongodb+srv://user:abc123456@file-sharing-wd.pasbcau.mongodb.net/?retryWrites=true&w=majority`;
    try {

        await mongoose.connect(MONGODB_URL);
        console.log('Database connected successfully');

    } catch (error) {
        console.error('error while connecting with the database', error.message);
    }

}

export default DBConnection;