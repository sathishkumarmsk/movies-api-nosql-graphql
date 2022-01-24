import mongoose from 'mongoose';
    
const URI = "mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/movies-rest?retryWrites=true&w=majority";
    
const db = async () => {
  try {
    await mongoose.connect(`${URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
    
export default db;