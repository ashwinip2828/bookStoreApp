import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

const app = express(dotenv);
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000; 
const URI = process.env.mongoDBURI

//connect to mongoDB 
// yeh sirf local mongodb ke liye dena padata hai
try {
  mongoose.connect(URI,{
    // yeh sirf local mongodb ke liye dena padata hai
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error:", error );
}

//define routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});