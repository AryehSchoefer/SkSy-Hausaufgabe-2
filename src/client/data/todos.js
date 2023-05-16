export async function getTodos() {
  const todos = await fetch("http://localhost:3000/api/todos");
  const jsonTodos = await todos.json();
  return jsonTodos;
}

export async function addTodo({ description, progress, deadline }) {
  const newTodo = await fetch("http://localhost:3000/api/todo/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description, progress, deadline }),
  });
  const jsonNewTodo = await newTodo.json();
  return jsonNewTodo;
}
