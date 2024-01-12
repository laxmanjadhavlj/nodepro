const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.connection.on('connected', () => console.log('connected'));
        mongoose.connection.on('open', () => console.log('open'));
        mongoose.connection.on('disconnected', () => console.log('disconnected'));
        mongoose.connection.on('reconnected', () => console.log('reconnected'));
        mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
        mongoose.connection.on('close', () => console.log('close'));
        mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log(error)
    }
}

exports.db = db