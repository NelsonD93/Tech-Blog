const express = require('express');
const app = express()
const exphbs = require("express-handlebars");
const hbs = exphbs.create();
const sequelize = require("./config/connection");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(require('./controllers/home-routes.js'))
app.use('/api/user',require('./controllers/api/user-routes.js'))

app.listen(3001, () => {
    console.log('Server listening');
    sequelize.sync({ force: true });
  });