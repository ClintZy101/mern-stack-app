import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from './routes/product.routes.js'

const app = express();

dotenv.config();

const PORT =process.env.PORT || 5000;

//middleware: allows you to accept json data in the req.body
app.use(express.json());
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Node API ser");
});

