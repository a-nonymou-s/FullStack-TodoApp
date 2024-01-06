import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const API_BASE = 'http://localhost:4001/todo';
function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  }
  useEffect(() => {
    GetTodos();
  }, [])
  const GetTodos = () => {
    fetch(API_BASE)
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.log(err))
  }
  const addItem = async () => {
    const data = await fetch(API_BASE + '/new', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        name: input,
      })
    }).then(res => res.json())
    await GetTodos()
    setInput('')
    document.getElementById('is').value = ""
  }
  return (
    <div className="container flex flex-col items-center">
      {/* Header Section */}
      <header className="h-24 flex justify-center items-center bg-white">
        <h1 className="text-4xl font-bold">Full Stack - Todo App</h1>
      </header>

      {/* Input and Button Section */}
      <div className="flex flex-row items-center align-middle p-3 bg-white">
        <input
          className="border border-gray-300 rounded-md p-2 mb-2"
          type="text"
          placeholder="Task name"
          id = "is"
          onChange={handleChange} 
        />
        <button onClick={() => addItem()} className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-md">
          <span>ADD</span>
        </button>
      </div>
      <div className="flex flex-col items-center p-3">
        {items.map((item) => {
          const {_id, name, status} = item
          return <TodoItem name={name} id={_id} status={status} setItems={setItems}/>
        })}
      </div>
    </div>
  );
}

export default App;
