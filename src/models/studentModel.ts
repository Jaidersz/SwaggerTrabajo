import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table({
  tableName: "students",
  timestamps: true,
})
export class StudentModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({
    allowNull: false,
  })
  name!: string;
}
