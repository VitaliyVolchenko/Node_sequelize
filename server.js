const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const divideRoutes = require('./routes/divide');
const skillRoutes = require('./routes/skill');
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

// Server Listen
// db.sequelize.sync({force:true}).then(function(){
//   app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));
// });

app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));


module.exports = app;