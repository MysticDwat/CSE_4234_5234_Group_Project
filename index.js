//import express and mongoose
const express = require('express');
const mongoose = require('mongoose');

//settings
const PORT = 3001;
const URI = 'mongodb://127.0.0.1:27017/cse5234_task_list';

//create app
const app = express();

//set app to decode json and url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create mongoose schemas
const task_schema = new mongoose.Schema({
    user_id: String,
    category_id: String,
    name: String,
    description: String,
    due_date: Date,
    status: String
});

const category_schema = new mongoose.Schema({
    user_id: String,
    name: String
});

const user_schema = new mongoose.Schema({
    firebase_uid: String
});

task_schema.index({user_id: 1, category_id: 1, name: 1},{unique: true});
category_schema.index({user_id: 1, name: 1},{unique: true});
user_schema.index({firebase_uid: 1},{unique: true});

const Task = new mongoose.model('Task', task_schema);
const Category = new mongoose.model('Category', category_schema);
const User = new mongoose.model('User', user_schema);

//connect to mongodb server
(async () => {
    await mongoose.connect(URI).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));
})();

//get all tasks
app.get('/api/get/tasks/:user_id', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find tasks by user id
        let docs = await Task.find({user_id: user_id});

        //if tasks was not found, indicate user id not found
        if(!docs){
            res.status(404).json({message: 'User id not found.'});
            return;
        }

        //send task
        res.status(200).json({message: docs});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up tasks.'});
    }
});

//get task by name
app.get('/api/get/tasks/:user_id/:task_name', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find task by id
        let doc = await Task.findOne({name: parameters['task_name'], user_id: user_id});

        //if task was not found, indicate task id not found
        if(!doc){
            res.status(404).json({message: 'Task name or user id not found.'});
            return;
        }

        //send task
        res.status(200).json({message: doc});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up task.'});
    }
});

//get all categories
app.get('/api/get/categories/:user_id', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find categories by user id
        let docs = await Category.find({user_id: user_id});

        //if user id was not found, indicate user id not found
        if(!docs){
            res.status(404).json({message: 'User id not found.'});
            return;
        }

        //send task
        res.status(200).json({message: docs});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up categories.'});
    }
});

//get category by name
app.get('/api/get/categories/:user_id/:category_name', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find category by name
        let doc = await Category.findOne({name: parameters['category_name'], user_id: user_id});

        //if category was not found, indicate category name not found
        if(!doc){
            res.status(404).json({message: 'Category name or user id not found.'});
            return;
        }

        //send task
        res.status(200).json({message: doc});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up category.'});
    }
});

//get user id by uid
app.get('/api/get/users/:firebase_uid', async (req, res) => {
    //url parameters
    let parameters = req.params;

    try {
        //attempt to find user by uid
        let doc = await User.findOne({firebase_uid: parameters['firebase_uid']});

        //if user was not found, indicate user id not found
        if(!doc){
            res.status(404).json({message: 'Firebase uid not found.'});
            return;
        }

        //send task
        res.status(200).json({message: doc});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up user.'});
    }
});

//open app to listen on port
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});