// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DEV_DATABASE_NAME!, process.env.DEV_DATABASE_USER!, process.env.DEV_DATABASE_PASSWORD, {
  host: process.env.DEV_DATABASE_HOST!,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
