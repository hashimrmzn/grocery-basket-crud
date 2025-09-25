import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import createProductTable from "./src/data/createBasketTable.js";
import productRoutes from "./src/routes/basketRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
createProductTable();

app.use("/api", productRoutes);
app.use(errorHandler);
app.use("/", productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
