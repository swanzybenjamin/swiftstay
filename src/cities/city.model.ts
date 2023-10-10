import { Model, DataTypes } from 'sequelize';
//import sequelize from '../db/db.config';

class City extends Model {
  public id!: number;
  public name!: string;
  public region!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

City.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cities',
  },
);

export default City;
