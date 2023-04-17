import { PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [editName, setEditName] = useState('');
  const [openEditUI, setOpenEditUI] = useState(false);

  const addTodoHandler = () => {
    console.log("click");
  };

  const deleteTodoHandler = () => {
    console.log("Delete");
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/todos/");
      setTodos(data);
    };
    fetchTodos();
  }, []);

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
            <PlusIcon className="icons hover:opacity-70" />
          </i>
        </div>

        <div className="mt-5 flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {todos?.map((todo, index) => (
            <div
              key={todo.id}
              className="max-w-md mx-auto w-full p-5 h-full rounded-xl bg-blue-500 flex items-center justify-between"
            >
              <p onClick={()=>{
                setEditStatus(todo.status)
                setEditName(todo.name)
                setOpenEditUI(true)
              }} className="cursor-pointer">
                {todo.name}{" "}
                {todo.status && (
                  <span className="test-xs text-gray-300">(Completed)</span>
                )}
              </p>

              <i onClick={() => deleteTodoHandler(todo.id)}>
                <TrashIcon className="icons" fill="white" />
              </i>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-72 h-fit bg-white text-slate-900 absolute left-1/2 rounded-xl px-3 py-2 -translate-x-1/2 -translate-y-1/2 ${
          openEditUI ? "" : "hidden"
        }`}
      >
        <div className="flex items justify-between">
          <h1>Edit Todos</h1>
          <i onClick={() => setOpenEditUI(false)}>
            <XMarkIcon className="icons" />
          </i>
        </div>
        <div className="flex items-center h-5 w-full space-x-2 mb-4">
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={editStatus}
            onChange={() => setEditStatus(!editStatus)}
          />
        </div>

        <div>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-300 rounded-xl"
            placeholder="PPP.."
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
