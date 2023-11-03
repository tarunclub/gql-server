import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://tarunk1004:QHNh42bGtCb8PZPs@cluster0.6qmc458.mongodb.net/adminjs?retryWrites=true&w=majority'
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
