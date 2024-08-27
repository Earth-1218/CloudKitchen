// Step 1: Import scripts
const { Sequelize } = require('sequelize');
require('dotenv').config();

/***** Option 1: SQLite in-memory database */
/***** const dbconnection = new Sequelize('sqlite::memory:'); */

/***** Option 2: SQLite with a file */
/***** const dbconnection = new Sequelize({ */
/*****   dialect: 'sqlite', */
/*****   storage: 'path/to/database.sqlite' */
/***** }); */

/***** Option 3: PostgreSQL */
/***** const dbconnection = new Sequelize('postgres://user:pass@example.com:5432/dbname'); */

/***** Option 4: MySQL */
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

// Step 2: Create database connection
dbconnection.authenticate()
.then(() => {
  console.log('Database connected successfully!');
})
.catch(err => {
  console.error('Error connecting to database:', err);
});

// Step 3: Export scripts
module.exports = {
  dbconnection
};
