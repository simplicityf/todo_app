const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        desc: {type: String, required: true},
       // createdat: {timestamp: True}
    }, {timestamps: true}
);

const Todo = mongoose.model("todo", todoSchema);

module.exports= Todo;