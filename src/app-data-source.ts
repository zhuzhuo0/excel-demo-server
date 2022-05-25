import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "test",
  entities: ["src/entity/*.ts"],
  logging: false,
  synchronize: true,
});
