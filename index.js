const fakaTodoDatabase = {};

const express = require("express");
const cors = require("cors");

app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome ");
});

app.get("/getAllTodos", (req, res) => {
  res.send(fakaTodoDatabase);
});

app.post("/addTodo", (req, res) => {
  if (!fakaTodoDatabase[req.body.id]) {
    fakaTodoDatabase[req.body.id] = req.body;
    res.send(`Todo added.`);
  } else {
    res.send("Todo already exist");
  }
});

app.put("/updateTodo", (req, res) => {
  const todo = req.body;
  if (fakaTodoDatabase[todo.id]) {
    fakaTodoDatabase[todo.id] = todo;
    res.send(`Updated DB`);
  } else {
    res.send("No todo found with this id");
  }
});

app.delete("/deleteTodo/:id", (req, res) => {
  const id = req.params.id;
  if (fakaTodoDatabase[id]) {
    delete fakaTodoDatabase[id];
    res.send(`Deleted todo with id: ${id}`);
  } else {
    res.send("No todo found with this id");
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
