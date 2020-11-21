

//Heroku:
//mysql://b9da3cec03769a:941608c7@us-cdbr-east-02.cleardb.com/heroku_5ad851fbeac6d0f?reconnect=true
const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "h1o8cqexemtcrx6o",
    PASSWORD: "xs0wy92z64iiuo5n",
    DB: "f3aw6gx7hfugk3v0",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;