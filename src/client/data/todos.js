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

export async function editTodo({ id, description, progress, deadline }) {
  const updated = await fetch("http://localhost:3000/api/todo/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, description, progress, deadline }),
  });
  return updated;
}

export async function deleteTodo({ id }) {
  const deleted = await fetch("http://localhost:3000/api/todo/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return deleted;
}
