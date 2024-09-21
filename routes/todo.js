const express = require("express");
const todo = require("../controllers/todo");

const router = express.Router();

//const app = express();

router.get("/", todo.homeController);

router.get("/addtodo", todo.addTodoFormController);

router.get("/updatetodo", todo.updateTodoFormController);

router.get("/deletetodo", todo.deleteTodoFormController);

router.post("/add-todo", todo.addTodoController);

router.post("/update-todo/:id", todo.updateTodoController);

router.get("/confirm-delete", todo.deleteTodoController)

module.exports = router;