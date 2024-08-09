const express = require('express');
const app = express();
const mongoose = require('mongoose');


const courses = mongoose.connect('mongodb://localhost:27017/node-mongoose')
	.then(() => {
		console.log('Connected to MongoDB...');
	})
	.catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean
})


async function getCourses() {
	// const pageNumber = 2;
	// const pageSize = 10;

	const Course = mongoose.model('Course', courseSchema);
	const courses = await Course.find()


								// .find({name:/.*the.*/i})  // { i for case insenstive search this will find the name with the word 'the' in it }


								// .find({name:/^the.*/i}) // { i for case insenstive search this will find the name starting with the word 'the' in it }



								.or([{isPublished: false}, {tags: {$in: ['programming', 'backend']}}])
								.limit(10)
								.sort({ name: 1 })
								.select({ name:1,tags: 1,isPublished: 1 });
								// .estimatedDocumentCount()
								// .countDocuments()
								// .skip((pageNumber - 1) * pageSize)
								// .limit(pageSize)

	console.log(courses);
	return courses;
}

// getCourses();