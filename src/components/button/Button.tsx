import classes from "./Button.module.scss";
import clsx from "clsx";
type propType = {
  children: React.ReactNode;
  onClickFn?: () => void;
  className?: string;
};
const Button = ({ children, onClickFn, className, ...rest }: propType) => {
  return (
    <button
      className={clsx(classes.mainBtnStyle, className)}
      onClick={onClickFn}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
