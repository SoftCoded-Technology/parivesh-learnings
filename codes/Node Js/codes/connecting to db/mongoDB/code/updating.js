const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], default: [],required: true },
    date: { type: Date, default: Date.now },
    isPublished: {type:Boolean, default: false , required: true},
    price:{
        type: Number,
        required:function(){return this.isPublished}
    }
})


const courses = mongoose.connect('mongodb://localhost:27017/node-mongoose')
.then(() => {
    console.log('Connected to MongoDB...');
})
.catch(err => console.error('Could not connect to MongoDB...', err));


const fetchCourses = async () => {
    const Course = mongoose.model('Course', courseSchema);
    const courses = await Course.find();
}

fetchCourses()


// async function updateCourse() {
//     const Course = mongoose.model('Course', courseSchema);
//     // const updateCourse = await Course.updateOne({ name: "You Don't Know JS" }, { $set: { name: "Python for Beginners" } })
//     const course = await Course.find({ name: "Python for Beginners" })

//     console.log(course);
//     // console.log(updateCourse);

// }

// updateCourse()

async function updateCourseById(id) {
    const Course = mongoose.model('Course', courseSchema);
    const course = await Course.findById(id);
    if (!course) return

    course.name = "Python for Beginners";
    course.author = "Parivesh";

    const result = await course.save();
    console.log(result);
}

// updateCourseById("66b497945232ed69de03a079")

async function addCourse() {
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: "Node JS for Beginners",
        author: "Parivesh",
        tags: ["programming", "backend"],
    })

    try{
        const result = await course.save();
        console.log(course);
    }catch(err){
        console.log(err.message);
    }
}

// addCourse()

app.listen(3000)