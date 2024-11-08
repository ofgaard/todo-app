import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex gap-2">

        <NavBar></NavBar>

        <div className="flex justify-center w-[10%] sm:w-[40%] md:w-screen">
        <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Layout;