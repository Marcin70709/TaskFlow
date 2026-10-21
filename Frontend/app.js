const API = "http://localhost:3000/api/tasks";

const list = document.getElementById("task-list");
const form = document.getElementById("task-form");

async function loadTasks() {
  const res = await fetch(API);
  let tasks = await res.json();
  tasks = router(tasks);

  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.title}</span>
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <button>Usuń</button>
    `;

    li.querySelector("input").addEventListener("change", async e => {
      await fetch(`${API}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: e.target.checked })
      });
      loadTasks();
    });

    li.querySelector("button").addEventListener("click", async () => {
      await fetch(`${API}/${task.id}`, { method: "DELETE" });
      loadTasks();
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const title = document.getElementById("title").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  form.reset();
  loadTasks();
});

loadTasks();
