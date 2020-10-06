

//Heroku:
//mysql://bf5bf61e6516e7:977e3aac@us-cdbr-east-02.cleardb.com/heroku_0bbbe33374fcc81?reconnect=true
const dbconfig = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "bf5bf61e6516e7",
    PASSWORD: "977e3aac",
    DB: "heroku_0bbbe33374fcc81heroku_0bbbe33374fcc81",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;