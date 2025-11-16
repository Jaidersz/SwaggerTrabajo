import { Sequelize } from "sequelize-typescript";
import { StudentModel } from "../models/studentModel";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  models: [StudentModel],
  logging: false,
});
