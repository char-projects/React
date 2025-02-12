import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask("");
      setCount(count + 1);
  }

  const removeTask = (index) => {
      const updatedTasks = tasks.filter((_, taskIndex) =>taskIndex !== index);
      setTasks(updatedTasks);
      setCount(count - 1);
  };

  return (
    <>
      <div className="card">
      <h1>To Do</h1>
        <button disabled>
            Task count: {count}
        </button>
        <p>
          Add tasks to increase the task counter or finish them to decrease it!
        </p>
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
      </div>
        <div className="leftAlign">
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
        <div className="card">
      <p className="tm-signature">
        Made by Charlotte <span>♥</span>
      </p>
    </div>
    </>
  );
}

export default App;
