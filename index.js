const express = require("express");
const PORT = process.env.PORT || 3001;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("La base de données est connectée");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here

app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", (req, res) => {
  console.log("Bonjour, les Skuplusien");
});

const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`L'application fonctionne sur le port ${PORT}`);
});
