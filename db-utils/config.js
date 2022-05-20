module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "v052xd4",
    DB: "rate-app-db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };