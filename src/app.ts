import cors from "cors";
import express from "express";

import routes from "./routes";
import { setupSwagger } from "./config/providers/swagger-config.provider";
import { globalErrorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.set("trust proxy", true);

app.use(express.json());

app.use("/api", routes);

setupSwagger(app);

app.use(globalErrorHandler);

export default app;
