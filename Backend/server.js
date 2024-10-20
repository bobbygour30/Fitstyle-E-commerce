import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "*",  // Allow the admin panel URL
  credentials: true,  // Allow cookies or auth tokens
  methods: "GET,POST,PUT,DELETE",  // Allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization"  // Allowed headers
};

app.use(cors(corsOptions));

// Handle preflight requests for specific routes
app.options("/api/*", cors(corsOptions));  // Handles CORS preflight for API routes

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
