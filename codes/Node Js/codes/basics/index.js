const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const Joi = require('joi');
const express = require('express');
const Logger = require('./middlewares/Logger')
const Authenticate = require('./middlewares/Authenticate')
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses')
const home = require('./routes/home')



const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(Logger);
app.use(Authenticate);
app.use(helmet());



app.use('/courses', courses);
app.use('/', home);


// console.log(`Environment: ${config.get('name')}`);
// console.log(`DB: ${config.get('db.url')}`);
// console.log(`Email: ${config.get('email.host')}`);
// console.log(`Email password: ${config.get('email.password')}`);


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

if(app.get('env') === 'development'){
	app.use(morgan('tiny'));
	// console.log('Morgan enabled');
	startupDebugger('Morgan enabled');
}

dbDebugger('Connected to the database');



app.listen(3000, () => {
	console.log('Server started on port 3000');
});