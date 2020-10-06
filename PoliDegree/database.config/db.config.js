

//Heroku:
//mysql://bba5e3fedb8ccb:d334dacf@us-cdbr-east-02.cleardb.com/heroku_7f808be429246d3?reconnect=true
const dbconfig = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "bba5e3fedb8ccb",
    PASSWORD: "d334dacf",
    DB: "heroku_7f808be429246d3",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;