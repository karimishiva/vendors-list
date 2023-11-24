import { useNavigate } from "react-router-dom";
import { BrandLogo } from "src/assets/icons";
import Button from "../button/Button";
import classes from "./notFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.vendorsNotFound}>
      <BrandLogo />
      <p>صفحه مورد نظر یافت نشد.</p>
      <Button
        onClickFn={() => navigate("/vendorsList")}
        className={classes.linkBtn}
      >
        صفحه لیست رستوران ها
      </Button>
    </div>
  );
};

export default NotFound;
