/**
 * App´s reponsability : express config, routes, middlewares
 */

// Express
import express from "express";

// Routes
import TablesRoute from "./routes/TableRoutes.js";
import RoleRoute from "./routes/RoleRoute.js";

const app = express();
import cors from "cors";
app.use(cors());

// Rotas
app.use("/api", TablesRoute, RoleRoute);

export default app;
