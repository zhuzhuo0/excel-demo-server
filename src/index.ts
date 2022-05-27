import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "reflect-metadata";
import { dataSource } from "./app-data-source";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";

dotenv.config();

// 初始化数据库连接
dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app: Express = express();
const port = process.env.PORT;

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// swagger ui
app.use("/doc", swaggerUi.serve, async (req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import("../swagger.json")));
});

// 挂载路由
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
