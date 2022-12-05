const express = require('express');
const app = express()
const exphbs = require("express-handlebars");
const hbs = exphbs.create();
const sequelize = require("./config/connection");
const path = require('path')
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const options = {
  secret: 'secret',
  cookie: {},
  resave: true,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
}
app.use(session(options))
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'))
app.use('/api/users',require('./controllers/api/user-routes.js'))
app.use('/api/posts',require('./controllers/api/post-routes'));
app.use('/api/comments',require('./controllers/api/comment-routes'))

app.listen(3001, () => {
    console.log('Server listening');
    sequelize.sync({ force: false });
  });