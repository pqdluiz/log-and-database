import mongoose from 'mongoose';

export const LoggerModel = new mongoose.Schema({ name: String, email: String });
