import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const WebLayout = () => {
  return (
    <>
      <Navbar />
     
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default WebLayout;
