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

// CORS configuration for frontend and admin panel
const corsOptions = {
  origin: ["https://fitstyle-admin.vercel.app", "https://fitstyle-frontend.vercel.app"], // Add frontend URL and admin panel URL
  credentials: true,  // Allow credentials (cookies, authorization headers)
  methods: "GET,POST,PUT,DELETE",  // Allowed methods
  allowedHeaders: "Content-Type,Authorization",  // Allowed headers
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

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
