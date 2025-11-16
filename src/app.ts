import express from "express";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import { sequelize } from "./config/database";
import studentController from "./controllers/studentController";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/students", studentController);

const PORT = 3000;

(async () => {
  await sequelize.sync({ alter: true });
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})();
