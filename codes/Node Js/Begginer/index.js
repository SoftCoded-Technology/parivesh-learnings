const config = require('config');
const Joi = require('joi');
const express = require('express');
const Logger = require('./middlewares/Logger')
const Authenticate = require('./middlewares/Authenticate')
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(Logger);
app.use(Authenticate);
app.use(helmet());


console.log(`Environment: ${config.get('name')}`);
console.log(`DB: ${config.get('db.url')}`);
console.log(`Email: ${config.get('email.host')}`);
console.log(`Email password: ${config.get('email.password')}`);


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

if(app.get('env') === 'development'){
	app.use(morgan('tiny'));
	console.log('Morgan enabled');
}

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' },
	{ id: 4, name: 'course4' },
	{ id: 5, name: 'course5' },
	{ id: 6, name: 'course6' },
]

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/courses', (req, res) => {
	res.send(courses);
})

app.get('/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
})

app.post('/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const course = {
		id: courses.length + 1,
		name: req.body.name
	}
	courses.push(course);
	res.send(course);
})

app.put('/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	const { error } = validateCourse(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	course.name = req.body.name;
	res.send(course);
})

app.delete('/courses/:id', (req, res) => {
	const course = courses.find(course => course.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	const index = courses.indexOf(course);
	courses.splice(index, 1);

	res.send(course);
})

app.listen(3000, () => {
	console.log('Server started on port 3000');
});

function validateCourse(course) {
	const schema = Joi.object({
		name: Joi.string().min(3).required()
	})
	return schema.validate(course);
}