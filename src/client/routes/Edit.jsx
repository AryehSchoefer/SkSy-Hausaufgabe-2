import { useState } from "react";

import { Form, useLoaderData, useLocation, redirect } from "react-router-dom";
import { format } from "date-fns";
import { editTodo, getTodos } from "../data/todos";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export async function action({ request, params }) {
  const formData = await request.formData();
  const description = formData.get("description");
  const progress = formData.get("progress");
  const deadline = formData.get("deadline").split(": ")[1];
  const editedTodo = await editTodo({
    id: params.todoId,
    description,
    progress,
    deadline,
  });
  if (editedTodo) {
    return redirect("/");
  }
  return null;
}

export async function loader({ params }) {
  const todos = await getTodos();
  const todo = todos.find((todo) => todo._id === params.todoId);
  if (!todo) {
    return null;
  }

  return todo;
}

function Edit() {
  const { pathname } = useLocation();
  const todo = useLoaderData();

  if (!todo) {
    return (
      <div className="bg-indigo-200 h-screen overflow-auto">
        <div className="flex flex-col justify-center items-center gap-3 py-3">
          <h1 className="text-3xl py-3">
            Couldn't find TODO with id: {pathname.split("/")[2]}
          </h1>
        </div>
      </div>
    );
  }

  const deadline_day_month_year = todo.deadline.split(".");
  const [selectedDate, setSelectedDate] = useState(
    new Date(
      deadline_day_month_year[2],
      deadline_day_month_year[1] - 1,
      deadline_day_month_year[0]
    )
  );

  console.log(selectedDate);

  return (
    <div className="bg-indigo-200 h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center gap-3 py-3">
        <Form method="put" className="flex flex-col gap-3 w-11/12 sm:w-1/2">
          <div className="flex md:flex-row flex-col gap-2">
            <div className="flex flex-col sm:grow">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                defaultValue={todo.description}
                required
                className="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col sm:grow-0">
              <label
                htmlFor="progress"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Progress
              </label>
              <input
                type="number"
                name="progress"
                defaultValue={todo.progress}
                required
                min={"0"}
                max={"100"}
                className="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col align-center justify-center">
            <textarea
              type="text"
              name="deadline"
              placeholder={`TODO due to: ${
                selectedDate
                  ? format(selectedDate, "dd.MM.yyyy")
                  : format(Date.now(), "dd.MM.yyyy")
              }`}
              readOnly
              value={`TODO due to: ${
                selectedDate
                  ? format(selectedDate, "dd.MM.yyyy")
                  : format(Date.now(), "dd.MM.yyyy")
              }`}
              className="text-2xl h-16 sm:h-8 bg-transparent resize-none placeholder:text-gray-900 w-full hover:cursor-default focus:outline-none text-center appearance-none self-center"
            />
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              defaultMonth={selectedDate}
              className="self-center"
            />
          </div>
          <button
            type="submit"
            className="self-center text-white px-3 py-2 flex bg-blue-700 rounded rounded-lg"
          >
            Edit TODO
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Edit;
