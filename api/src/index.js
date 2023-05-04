import app from "./app.js";
import config from "./config/config";
// Setup Mongoose and connect to DB here
import mongoose from 'mongoose';
mongoose.connect(config.mongo, {
useUnifiedTopology: true,
useNewUrlParser: true
}).then(() => console.log('Database connected'))
.catch(() => console.log('Error connecting to database'));


app.listen(config.port, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${config.port}`);
});