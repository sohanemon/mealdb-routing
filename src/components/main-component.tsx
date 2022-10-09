interface Props {}
import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import MyNav from "./my-nav";

const MainComponent = () => {
  return (
    <div className='mx-auto max-w-screen-xl py-2 mt-2 px-4 lg:px-8 lg:py-4'>
      <MyNav />
      <Outlet />
    </div>
  );
};

export default MainComponent;
