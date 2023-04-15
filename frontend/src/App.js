import { PlusIcon } from "@heroicons/react/24/solid";

function App() {

  const addTodoHandler = () =>{
    console.log("click");
  }

  return (
    <div className="bg-slate-900 text-white h-screen relative">
      <div className="flex flex-col w-full p-10">
        <h1 className="text-5xl text-center pb-5">Todo App</h1>
        <div className="flex items-center justify-between bg-slate-700 rounded-xl px-4">
          <input
            type="text"
            className="w-full py-2 rounded-xl bg-slate-700 text-white outline-none"
          />
          <i onClick={addTodoHandler}>
            <PlusIcon className="h-5 w-5 cursor-pointer hover:opacity-70" />
          </i>
        </div>
      </div>
    </div>
  );
}

export default App;
