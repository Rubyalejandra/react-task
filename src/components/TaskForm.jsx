import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
  };

  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-slate-500 p-10 mb-5">
      <h1 className="text-2xl font-bold capitalize text-slate-50 mb-3">crea tus tareas ✍️</h1>
      <input className="bg-slate-300 p-3 w-full mb-2 shadow-lg"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2 shadow-lg "
        placeholder="aquí la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-indigo-700 px-3 py-1 text-white rounded-sm hover:bg-indigo-300  shadow-lg ">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
