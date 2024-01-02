
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const[toDo, setToDo] = useState('')
  const[toDoList, setToDoList] = useState([])
  const[id, setId] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, {id:id, title:toDo}])
    setToDo('')
    setId(id+1)
  }

  function removeToDo(deleteId) {
    setToDoList(toDoList.filter(item => item.id !== deleteId))
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder="enter to do"
          onChange={e => setToDo(e.target.value)}
          value={toDo} />
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {
            toDoList.map(item => {
              return (
                <li key={item.id}>
                  {item.title}
                  <button onClick={()=>removeToDo(item.id)}>Delete</button>
                </li>
                )
            })
          }
        </ul>
    </div>
  )
}

export default App
