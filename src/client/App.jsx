import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-indigo-200 h-screen overflow-auto">
        <div className="flex flex-col justify-center items-center gap-3 py-3">
          <Card
            description={"yo hasdhahsdaiushdi"}
            deadline={`${new Date(Date.now()).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}
          />
          <Card
            description={
              "yo hasdhahsdaiushdi hasdhahsdaiushdihasdhahsdaiushdihasdhahsdaiushdi hasdhahsdaiushdihasdhahsdaiushdihasdhahsdaiushdihasdhahsdaiushdihasdhahsdaiushdihasdhahsdaiushdi"
            }
            deadline={`${new Date(Date.now()).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}
          />
        </div>
      </div>
    </>
  );
}

export default App;
