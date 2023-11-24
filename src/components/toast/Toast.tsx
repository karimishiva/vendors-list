import { ToastContainer } from "react-toastify";
import c from "./toast.module.scss";
import "react-toastify/dist/ReactToastify.css";
export const Toast = () => {
  return (
    <ToastContainer
      rtl
      limit={6}
      position='top-right'
      className={c.container}
      toastClassName={c.toast}
      bodyClassName={c.body}
      progressClassName={c.progress}
    />
  );
};
