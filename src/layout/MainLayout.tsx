import { Outlet } from "react-router-dom";
import classes from "./mainLayout.module.scss";
const MainLayout = () => {
  return (
    <div className={classes.layoutContainer}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
