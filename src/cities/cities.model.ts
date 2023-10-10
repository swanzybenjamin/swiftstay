import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Cities extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  region: string;

  @Column
  createdAt: Date;
}
