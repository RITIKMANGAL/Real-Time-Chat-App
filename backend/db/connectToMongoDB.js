import mongoose from 'mongoose';


const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ritikmangal98:s2wxbTpTZ2rBXFYo@cluster0.uut5xab.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");
  }
  catch (error) {
    console.log("Error Connecting to MongoDB " , error.message);
  }
}

export default connectToMongoDB;