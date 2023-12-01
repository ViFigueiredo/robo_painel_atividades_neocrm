// config.js

const { DataTypes, Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.DATABASE_HOST;
const dialect = process.env.DATABASE_DIALECT;
const db = process.env.DATABASE;
const user = process.env.DATABASE_USERNAME;
const pwd = process.env.DATABASE_PASSWORD;
const instanceName = process.env.DATABASE_INSTANCE;

const database = new Sequelize(db, user, pwd, {
  dialect,
  host,
  dialectOptions: {
    options: {
      encrypt: false,
      instanceName,
      requestTimeout: 300000,
    },
  },
});

module.exports = { database, DataTypes };
