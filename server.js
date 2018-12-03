const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
// const Divide = require('./models').Divide;
// const Skill = require('./models').Skill;

const divideRoutes = require('./routes/divide');
const skillRoutes = require('./routes/skill');
//const exphbs  = require('express-handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars')


// Routes
app.use('/divides', divideRoutes);
//app.use('/skills', skillRoutes);

// Server Listen
app.listen(PORT, ()=> console.log(`Our server is live on port ${PORT}`));

module.exports = app;