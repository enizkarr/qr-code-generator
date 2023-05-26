require("dotenv").config();
// console.log(process.env.PORT)
module.exports = {
  mongo: process.env.MONGO,
  port: process.env.PORT,
};
