import { useState } from "react";
import { RiTodoLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    const [sideNav, setSideNav] = useState<boolean>(false);

    const toggleNav = () => {
        setSideNav(prev => !prev);
    }


    const handleResize = () => {
        if (window.innerWidth >= 768) {
             setSideNav(false);
        } 
    };
      window.addEventListener("resize", handleResize);   

return (
    <div className="flex">
    <div className="flex border-r border-neutral-800 fixed min-h-screen left-[-100%] md:left-0 flex-col pl-10 pr-10 pt-5 gap-20 md:min-w-72 ease-in-out duration-500">
    <div className="flex items-center gap-4 text-2xl">
        <RiTodoLine size={30}></RiTodoLine>
        <h1>Todo List</h1>
    </div>
    <div className="flex flex-col gap-5">
        <div className="flex justify-between">
        <p>Tasks</p>
        <p>+</p>
        </div>
        <p>Today</p>
        <p>Upcoming</p>
    </div>
    <div className="flex flex-col gap-5">
        <div className="flex justify-between">
        <p>Projects</p>
        <p>+</p>
        </div>
        <p># Default</p>
        <p># Work</p>

    </div>

    </div>
    <button className={`flex md:hidden ${sideNav && "hidden"} pt-2 pl-2`}
    onClick={toggleNav}>
    <RiMenuLine size={20}></RiMenuLine>
    </button>
    <div className={`${sideNav ? "fixed flex flex-col left-0 min-w-72 border-r border-neutral-800 min-h-screen ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500" } gap-20 pr-10 pl-10 pt-5`}>
    <div className="flex items-center gap-4 text-2xl">
        <RiTodoLine size={30}></RiTodoLine>
        <h1>Todo List</h1>
        <button className={`flex ml-auto`}
    onClick={toggleNav}>
    <RiMenuLine size={20}></RiMenuLine>
    </button>
    </div>
    <div className="flex flex-col gap-5">
        <div className="flex justify-between">
        <p>Tasks</p>
        <p>+</p>
        </div>
        <p>Today</p>
        <p>Upcoming</p>
    </div>
    <div className="flex flex-col gap-5">
        <div className="flex justify-between">
        <p>Projects</p>
        <p>+</p>
        </div>
        <p># Default</p>
        <p># Work</p>

    </div>


    </div>
    </div>
)

} 

export default NavBar;