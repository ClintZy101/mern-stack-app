import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from './routes/product.routes.js'

const app = express();
dotenv.config();

const port = 5000;

//middleware: allows you to accept json data in the req.body
app.use(express.json());
app.use('/api/products', productRoutes)

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Node API ser");
});

// console.log(process.env.DATABASE_URL, "mondodb");

// "type": "module"  === is used so you can use es6 modular export and import