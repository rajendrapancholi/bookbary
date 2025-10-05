import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import authorRoutes from "./routes/authorRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import cors from "cors";
dotenv.config();

// Initialize express
const app = express();

// CORS configuration options
const corsOptions = {
  origin: process.env.ORIGIN_URL, // Allow requests only from this frontend URL (replace with your frontend URL)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // If you use cookies or sessions, set this to true
};

// Use the CORS middleware with the specified options
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT}: http://localhost:${PORT}`)
);
