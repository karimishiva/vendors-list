import { ToastContainer } from "react-toastify";
import classes from "./toast.module.scss";
import "react-toastify/dist/ReactToastify.css";
export const Toast = () => {
  return (
    <ToastContainer
      rtl
      limit={6}
      position='top-right'
      className={classes.container}
      toastClassName={classes.toast}
      bodyClassName={classes.body}
      progressClassName={classes.progress}
    />
  );
};
