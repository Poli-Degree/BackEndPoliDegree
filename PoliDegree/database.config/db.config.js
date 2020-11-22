const dbconfig = {
    HOST: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "cfe4ct57nl3jjx0s",
    PASSWORD: "b6399nwth8u2jvrq",
    DB: "w27haak5vbjd602c",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;