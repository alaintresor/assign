// src/entity/Tag.ts or src/models/Tag.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Adjust the import path as necessary

export class Tag extends Model {
  public id!: number;
  public name!: string;
}

Tag.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "tags",
  sequelize,
});
