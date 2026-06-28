import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import discoveryRoutes from "./routes/discovery.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/discovery", discoveryRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "ForgeOS Backend",
    timestamp: new Date().toISOString(),
  });
});

export default app;
