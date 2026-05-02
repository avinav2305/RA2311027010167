import { useState, useEffect } from 'react'

function App() {
  const [task, setTask] = useState("")        // CHANGED: input → task
  const [todos, setTodos] = useState([])      // CHANGED: items → todos
  const [data, setData] = useState(null)      // SAME
  const [loading, setLoading] = useState(false) // SAME

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos") // CHANGED: /users → /todos
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task) return                          // CHANGED: input → task
    setTodos(prev => [...prev, task])          // CHANGED: items→todos, input→task
    setTask("")                                // CHANGED: setInput → setTask
  }
  const handleDelete = (i) => {
  setTodos(prev => prev.filter((_, index) => index !== i))
}
// in JSX:
{todos.map((todo, i) => (
  <div key={i}>
    {todo} <button onClick={() => handleDelete(i)}>Delete</button>
  </div>
))}
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Todo List</h1>                       {/* CHANGED: title */}
      <form onSubmit={handleSubmit}>
        <input
          value={task}                         // CHANGED: input → task
          onChange={e => setTask(e.target.value)} // CHANGED: setInput → setTask
          placeholder="Add a task"             // CHANGED: placeholder text
        />
        <button type="submit">Add Task</button> {/* CHANGED: button text */}
      </form>

      {todos.map((todo, i) => (               // CHANGED: items → todos
        <div key={i}>{todo}</div>
      ))}

      {data && data.slice(0,5).map(todo => (  // CHANGED: user → todo
        <div key={todo.id}>{todo.title}</div> // CHANGED: user.name → todo.title
      ))}
    </div>
  )
}

export default App