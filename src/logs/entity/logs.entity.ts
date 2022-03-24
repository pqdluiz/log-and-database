import mongoose from 'mongoose';

const logger = new mongoose.Schema({ name: String, email: String });
const LoggerModel = new mongoose.Model('logger', logger);

export { LoggerModel };
