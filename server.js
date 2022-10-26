const express = require('express');
const app = express()
const exphbs = require("express-handlebars");
const hbs = exphbs.create();
const sequelize = require("./config/connection");
const path = require('path')

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/home-routes.js'))
app.use('/api/users',require('./controllers/api/user-routes.js'))

app.listen(3001, () => {
    console.log('Server listening');
    sequelize.sync({ force: false });
  });