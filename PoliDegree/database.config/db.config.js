const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "vtu0kqz9wwkorgz6",
    PASSWORD: "xbvhjajs6ucc6law",
    DB: "utfv9ost89xnctk3",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;