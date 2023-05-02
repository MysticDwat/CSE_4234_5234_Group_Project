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

task_schema.index({user_id: 1, category_id: 1, name: 1},{unique: true});
category_schema.index({user_id: 1, name: 1},{unique: true});

const Task = new mongoose.model('Task', task_schema);
const Category = new mongoose.model('Category', category_schema);

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

//get task by id
app.get('/api/get/tasks/:user_id/:id_type/:task_id', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find task by id
        let doc = await Task.findOne(
            {
                [parameters['id_type']]: parameters['task_id'], 
                user_id: user_id
            });

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

//get category by id
app.get('/api/get/categories/:user_id/:id_type/:category_id', async (req, res) => {
    //url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to find category by name
        let doc = await Category.findOne(
            {
                [parameters['id_type']] : parameters['category_id'], 
                user_id: user_id
            });

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

//create task
app.post('/api/create/tasks', async (req, res) => {
    let data = req.body;

    try {
        //create new user document
        let new_task = new Task(data);

        //attempt to create user in db
        let doc = await Task.create(new_task).catch(err => console.log(err));

        //if user was not found, indicate user id not found
        if(!doc){
            res.status(404).json({message: 'Document not created'});
            return;
        }

        //send task
        res.status(200).json({message: doc});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up user.'});
    }
});

//create category
app.post('/api/create/categories', async (req, res) => {
    let data = req.body;

    try {
        //create new user document
        let new_category = new Category(data);

        //attempt to create user in db
        let doc = await Category.create(new_category).catch(err => console.log(err));

        //if user was not found, indicate user id not found
        if(!doc){
            res.status(404).json({message: 'Document not created'});
            return;
        }

        //send task
        res.status(200).json({message: doc});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up user.'});
    }
});

//delete task
app.delete('/api/delete/tasks/:user_id/:task_id', async (req, res) => {
    //store url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to create user in db
        let doc = await Task.deleteOne(
            {
                _id: parameters['task_id'], 
                user_id: user_id
            });

        //if user was not found, indicate user id not found
        if(!doc){
            res.status(404).json({message: 'Document not deleted'});
            return;
        }

        //send task
        res.status(200).json({message: 'Document deleted.'});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server failed to look up user.'});
    }
});

//delete task
app.delete('/api/delete/categories/:user_id/:category_id', async (req, res) => {
    //store url parameters
    let parameters = req.params;
    let user_id = parameters['user_id'] === 'public' ? null : parameters['user_id'];

    try {
        //attempt to create user in db
        let doc = await Category.deleteOne(
            {
                _id: parameters['category_id'], 
                user_id: user_id
            });

        //if user was not found, indicate user id not found
        if(!doc){
            res.status(404).json({message: 'Document not deleted'});
            return;
        }

        //send task
        res.status(200).json({message: 'Document deleted.'});

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