const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "nt9ypzkac3vninky",
    PASSWORD: "aoh3maqh8tx57da7",
    DB: "fysdsn6h5z3hjdqa",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;