import mongoose from 'mongoose';
import Todo from '../models/todo.js';

export const readTodos = async(req,res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const createTodos = async(req,res) => {
    const todos = new Todo(req.body);
    console.log(req);
    try{
        await todos.save();
        res.status(201).json(todos)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export const updateTodos = async(req,res) => {
    const {id} = req.params;
    const {title,content}  = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const todo = {title, content, _id : id};
    await Todo.findByIdAndUpdate(id, todo, {new : true })
    return res.json(todo);
}