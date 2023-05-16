import { useState } from "react";

import { Form, redirect } from "react-router-dom";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addTodo } from "../data/todos";

export async function action({ request, params }) {
  const formData = await request.formData();
  const description = formData.get("description");
  const progress = formData.get("progress");
  const deadline = formData.get("deadline").split(": ")[1];
  const newTodo = await addTodo({ description, progress, deadline });
  if (newTodo) {
    return redirect("/");
  }
  return null;
}

function Add() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-indigo-200 h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center gap-3 py-4">
        <Form method="post" className="flex flex-col gap-3 w-11/12 sm:w-1/2">
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
                required
                min={"0"}
                max={"100"}
                className="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col align-center justify-center">
            {/* <p className="text-2xl text-gray-900 self-center text-center">
              TODO due to: {`${format(selectedDate, "dd.MM.yyyy")}`}
            </p> */}
            <textarea
              type="text"
              name="deadline"
              placeholder={`TODO due to: ${format(selectedDate, "dd.MM.yyyy")}`}
              readOnly
              value={`TODO due to: ${format(selectedDate, "dd.MM.yyyy")}`}
              className="text-2xl h-16 sm:h-8 bg-transparent resize-none placeholder:text-gray-900 w-full hover:cursor-default focus:outline-none text-center appearance-none self-center"
            />
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="self-center"
            />
          </div>
          <button
            type="submit"
            className="self-center text-white px-3 py-2 flex bg-blue-700 rounded rounded-lg"
          >
            Add TODO
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Add;
