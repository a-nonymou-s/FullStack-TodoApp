const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({ name: String, status: Number});

module.exports = mongoose.model('Todo', TodoSchema);