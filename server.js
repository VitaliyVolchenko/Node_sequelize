const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
 
const path = require('path');
const PORT = process.env.PORT || 3002;

const divideRoutes = require('./routes/divide');
const skillRoutes = require('./routes/skill');
const userRoutes = require('./routes/user');
const db = require('./models/index');
//const exphbs  = require('express-handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars')

// Routes
app.use('/divides', divideRoutes);
app.use('/skills', skillRoutes);
app.use('/auth', userRoutes);
app.use(errorController.get404);

// Server Listen
// db.sequelize.sync({force:true}).then(function(){
//   app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));
// });

// db.sequelize.sync().then(function(){
//   app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));
// });

app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));


module.exports = app;