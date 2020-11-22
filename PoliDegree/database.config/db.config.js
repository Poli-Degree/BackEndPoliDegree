const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "l0ml55vrb2t2he3h",
    PASSWORD: "g60e30lri6fo7ewc",
    DB: "plrilciearqtevva",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;