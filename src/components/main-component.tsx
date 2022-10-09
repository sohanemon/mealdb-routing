interface Props {}
import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import MyNav from "./my-nav";

const MainComponent = () => {
  return (
    <div>
      <MyNav />
      <Outlet />
    </div>
  );
};

export default MainComponent;
