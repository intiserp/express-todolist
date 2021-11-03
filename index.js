const fakaTodoDatabase = {};

const express = require("express");
const cors = require("cors");

app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.get("/api/", (req, res) => {
  res.send("Welcome ");
});

app.get("/api/getAllTodos", (req, res) => {
  res.send(fakaTodoDatabase);
});

app.post("/api/addTodo", (req, res) => {
  if (!fakaTodoDatabase[req.body.id]) {
    fakaTodoDatabase[req.body.id] = req.body;
    res.status(200).send(fakaTodoDatabase);
  } else {
    res.status(400).send(fakaTodoDatabase);
  }
});

app.put("/api/updateTodo", (req, res) => {
  const todo = req.body;
  if (fakaTodoDatabase[todo.id]) {
    fakaTodoDatabase[todo.id] = todo;
    res.status(200).send(fakaTodoDatabase);
  } else {
    res.status(400).send(fakaTodoDatabase);
  }
});

app.delete("/api/deleteTodo/:id", (req, res) => {
  const id = req.params.id;
  if (fakaTodoDatabase[id]) {
    delete fakaTodoDatabase[id];
    res.status(200).send(fakaTodoDatabase);
  } else {
    res.status(400).send(fakaTodoDatabase);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
