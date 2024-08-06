const express = require('express');
const app = express();

const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'},
    {id:5, name:'course5'},
    {id:6, name:'course6'},
]
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
})

app.listen(3000 , () => {
    console.log('Server started on port 3000');
});