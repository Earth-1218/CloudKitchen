import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbconnection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  }
);

// You can test the database connection immediately after creating it
(async () => {
  try {
    await dbconnection.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();

export default dbconnection;
