export async function getTodos() {
  const todos = await fetch("http://localhost:3000/api/todos");
  const jsonTodos = await todos.json();
  return jsonTodos;
}
