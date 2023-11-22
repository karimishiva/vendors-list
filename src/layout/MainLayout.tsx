import { Outlet } from "react-router-dom";
import c from "./mainLayout.module.scss";
const MainLayout = () => {
  return (
    <div className={c.layoutContainer}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
