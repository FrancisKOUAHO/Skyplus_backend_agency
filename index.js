const express = require('express');
const PORT = process.env.PORT || 3001;
const morgan = require('morgan');
const cors = require('cors');
methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//configure database and mongoose
mongoose.set('useCreateIndex', true);
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('La base de données est connectéee');
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

let stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
//configure body-parser ends here

app.use(morgan('dev')); // configire morgan

// define first route
app.get('/', (req, res) => {
  res.send('Bonjour, les Skuplusien');
});

const userRoutes = require('./api/user/route/user'); //bring in our user routes
const clientRoutes = require('./api/client/route/client'); //bring in our user routes
const paymentRoutes = require('./api/payments/route/payment'); //bring in our payments routes

app.use('/user', userRoutes);
app.use('/client', clientRoutes);
app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`L'application fonctionne sur le port ${PORT}`);
});
