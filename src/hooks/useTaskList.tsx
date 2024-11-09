import { useState, useEffect } from "react";


const useTaskList = () => {
    const [tasks, setTasks] = useState(['hello world']);

    return {
        tasks,
        setTasks
    }
}

export default useTaskList;