import express, { Express } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { dataSource } from "./app-data-source";
import routes from "./routes";

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

// 挂载路由
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
