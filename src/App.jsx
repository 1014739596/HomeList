import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>
          <span className="emoji">📝</span> Mis Tareas
        </h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe una tarea..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Agregar</button>
        </div>

        <ul className="task-list">
          {tasks.map((t) => (
            <li
              key={t.id}
              className={t.completed ? "task completed" : "task"}
            >
              <span onClick={() => toggleTask(t.id)}>
                {t.text}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(t.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty">No tienes tareas aún 🚀</p>
        )}
      </div>
    </div>
  );
}

export default App;
