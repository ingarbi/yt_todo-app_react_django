import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = () =>{
    console.log("click");
  }

  useEffect(() =>{
    const fetchTodos = async () =>{
      const {data} = await axios.get("http://127.0.0.1:8000/todos/")
      setTodos(data)
    }
    fetchTodos()
  }, [])

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

        <div className="mt-5 flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {todos?.map((todo, index) =>(
            <div key={todo.id} className="max-w-md mx-auto w-full p-5 h-full rounded-xl bg-blue-500 flex items-center justify-between">
            <p>{todo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
