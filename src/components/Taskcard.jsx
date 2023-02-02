import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskcard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-600 text-white p-5 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title} </h1>
      <p className="text-gray-500 text-sm"> {task.description}</p>
      <button className="bg-red-600 px-2 py-1 rounded-sm m-3 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Taskcard;
