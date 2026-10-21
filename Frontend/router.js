function router(tasks) {
  const hash = window.location.hash;
  if (hash === "#/completed") {
    return tasks.filter(t => t.completed);
  }
  if (hash === "#/active") {
    return tasks.filter(t => !t.completed);
  }
  return tasks;
}

window.addEventListener("hashchange", () => location.reload());