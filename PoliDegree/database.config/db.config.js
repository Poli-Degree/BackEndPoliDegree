const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "p3mxwlvyaxubgals",
    PASSWORD: "xmwgvwfpc7r9tr52",
    DB: "m9lene8d8qttmoiz",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;