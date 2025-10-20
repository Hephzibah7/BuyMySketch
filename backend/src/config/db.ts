import mongoose from "mongoose";

const mongoURI ="mongodb+srv://he:he@cluster0.jqmtqda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set('debug', true);
// Function to connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // modern mongoose usually doesn't need these but keep for clarity
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // fail faster if unreachable
        } as mongoose.ConnectOptions);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // stop the app if DB connection fails
    }
};

