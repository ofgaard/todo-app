import { useState } from "react";
import useTaskList from "../hooks/useTaskList";


const TodayTodos = () => {
    const {tasks} = useTaskList();

  return (
    <div>
        {tasks.map((task, index) => (
         <div key={index}>
            {task}
         </div>
        ))}
    </div>
  );
};

export default TodayTodos;