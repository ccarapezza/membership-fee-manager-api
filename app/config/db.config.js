module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "represion",
  DB: "membership-fee-manager-api-db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
