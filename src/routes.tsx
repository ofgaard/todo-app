import Layout from "./Layout";
import AddTasks from "./pages/AddTasks";
import FutureTodos from "./pages/FutureTodos";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import TodayTodos from "./pages/TodayTodos";
import TodoDetails from "./pages/TodoDetails";

const routes = [
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                path: "today",
                element: <TodayTodos></TodayTodos>
            },
            {
                path: "future",
                element: <FutureTodos></FutureTodos>
            },
            {
                path: "id",
                element: <TodoDetails></TodoDetails>
            },
            {
                path: "projects",
                element: <Projects></Projects>,
                
            },
            {
                path: "add",
                element: <AddTasks></AddTasks>
            }

        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
];

export default routes;