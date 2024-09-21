const Todo = require("../models/todos");
const moment = require("moment")

const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.locals.moment = moment;
    res.render("index", { title: "Todo Page", todos: todos });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

const addTodoFormController = (req, res, next) => {
  try {
    res.render("addtodo", { title: "Add Todo" });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

const updateTodoFormController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const todo = await Todo.findById(id);
    res.render("updatetodo", { title: "Update Todo", todo });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

const deleteTodoFormController = async (req, res, next) => {
  try {
    const { id } = req.query;
    res.render("deletetodo", { title: "Delete Todo", id });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

const addTodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const newTodo = new Todo({ title, desc });

    await newTodo.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title;
    todo.desc = desc;
    await todo.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoController = async (req, res, next) => {
  try {
    const { id, confirm } = req.query;
    if (confirm === "yes") {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        res.send(404).send("Todo not found");
      }
    }
      res.redirect("/");
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoFormController,
  addTodoController,
  updateTodoController,
  deleteTodoController
};
