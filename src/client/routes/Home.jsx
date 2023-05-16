import Card from "../components/Card";
import { getTodos } from "../data/todos";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const todos = await getTodos();
  return todos;
}

function Home() {
  const todos = useLoaderData();

  return (
    <div className="bg-indigo-200 h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center gap-3 py-3">
        {todos
          .map((todo) => (
            <Card
              key={todo._id}
              id={todo._id}
              description={todo.description}
              deadline={todo.deadline}
              progress={todo.progress}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default Home;
