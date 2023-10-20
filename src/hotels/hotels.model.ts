import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cities } from '../cities/cities.model';

@Table
export class Hotels extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @ForeignKey(() => Cities)
  @Column({ allowNull: false, type: DataType.INTEGER.UNSIGNED })
  city_id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  rating: string;

  @Column({ allowNull: false, type: DataType.STRING })
  location: string;

  @Column({ allowNull: false, type: DataType.STRING })
  digital_address: string;

  @Column({ allowNull: false, type: DataType.STRING })
  description: string;

  @Column({ allowNull: false, type: DataType.NUMBER })
  singles_available: number;

  @Column({ allowNull: false, type: DataType.NUMBER })
  suites_available: number;

  @Column({ allowNull: false, type: DataType.NUMBER })
  vip_suites_available: number;

  @BelongsTo(() => Cities) // Define the association with the City model
  city: Cities; // This property will hold the associated city object

  @Column
  createdAt: Date;
}
