import { useState } from "react";
import useTaskList from "../hooks/useTaskList";

const AddTask = () => {
    const [newTask, setNewTask] = useState("");

    const { tasks, setTasks } = useTaskList();

    const addNewTask = () => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTask("");
    };

    return ( 
        <div className="flex items-baseline pt-5">
        <input className="border" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addNewTask}> Add Task</button>
        </div>
    )
}

export default AddTask;

