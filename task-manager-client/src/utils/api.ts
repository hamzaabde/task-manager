export async function getColumns() {
  return await fetch("http://localhost:5200/columns")
    .then((res) => res.json())
    .catch(console.error);
}

export async function getTasks() {
  return await fetch("http://localhost:5200/tasks")
    .then((res) => res.json())
    .catch(console.error);
}
