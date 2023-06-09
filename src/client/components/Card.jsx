import { Form, Link } from "react-router-dom";
import { deleteTodo } from "../data/todos";

export async function action({ request, params }) {
  const formData = await request.formData();
  const todoId = formData.get("todo_id");
  const deleted = await deleteTodo({ id: todoId });
  console.log(deleted);
  return null;
}

function Card({ id, description, deadline, progress }) {
  return (
    <div className="max-w-3xl w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
          {description}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {`${deadline} • ${progress}%`}
      </p>
      <div className="flex gap-2 justify-end">
        <Link
          to={`edit/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </Link>
        <Form method="delete">
          <input
            type="text"
            name="todo_id"
            value={id}
            className="hidden"
            readOnly
          />
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
          >
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Card;
