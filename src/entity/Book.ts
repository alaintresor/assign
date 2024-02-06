// src/entity/Book.ts or src/models/Book.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Adjust the import path as necessary
import { Tag } from './Tag';


export class Book extends Model {
  public id!: number;
  public title!: string;
  public writer!: string;
  public coverImage!: string;
  public price!: number;
  public tags!: string; // Storing tags as a string; consider normalizing if tags grow in complexity
}

Book.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  writer: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  coverImage: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tags: {
    type: new DataTypes.STRING(255), // This could be an array or JSON type depending on your database support
    allowNull: false,
  },
}, {
  tableName: "books",
  sequelize,
});

Book.belongsToMany(Tag, { through: 'BookTags', foreignKey: 'bookId' });
Tag.belongsToMany(Book, { through: 'BookTags', foreignKey: 'tagId' });
