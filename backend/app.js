const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config(); 
const Todo = require('./models/Todo');


const app = express(); 

app.use(express.json()); 
app.use(cors());
const port = 4001; 

const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
.then(() => console.log('Connected to the database…'))
.catch((err) => console.error('Connection error:', err));

//Routes 
app.get('/todo', async (req, res) => { 
   const allTasks = await Todo.find();
   res.json(allTasks)
 });

app.post('/todo/new', async (req,res) => {
    const newTask = await Todo.create({name:req.body.name, status:0});
    res.status(201).json({newTask})
})

app.delete('/todo/delete/:id', async(req,res) => { 
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.put('/todo/update/:id', async(req,res) => { 
    const result = await Todo.findByIdAndUpdate(req.params.id, {$set: {status: 1}}, {new: true})
    res.json(result)
})

app.listen(port, () => console.log(`Server is running on port ${port}`));