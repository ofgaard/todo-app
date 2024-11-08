import Layout from "./Layout";
import AddProject from "./pages/AddProject";
import AddTodo from "./AddTodo";
import EditTodo from "./pages/EditTodo";
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
                path: "edit/:id",
                element: <EditTodo></EditTodo>
            },
            {
                path: "projects",
                element: <Projects></Projects>,
                
            },

        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
];

export default routes;