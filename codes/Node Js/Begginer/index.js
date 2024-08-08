const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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