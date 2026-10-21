let tasks = [];
let idCounter = 1;

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const task = {
    id: idCounter++,
    title: req.body.title,
    completed: false
  };
  tasks.push(task);
  res.status(201).json(task);
};

exports.updateTask = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.completed = req.body.completed;
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.status(204).send();
};