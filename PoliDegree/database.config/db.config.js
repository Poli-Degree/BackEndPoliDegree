

//Heroku:
//mysql://b9da3cec03769a:941608c7@us-cdbr-east-02.cleardb.com/heroku_5ad851fbeac6d0f?reconnect=true
const dbconfig = {
    HOST: "localhost",
    USER: "jhballen",
    PASSWORD: "jhon123",
    DB: "polidegre",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;