import { useNavigate } from "react-router-dom";
import { BrandLogo } from "src/assets/icons";
import Button from "../button/Button";
import c from "./notFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={c.vendorsNotFound}>
      <BrandLogo />
      <p>صفحه مورد نظر یافت نشد.</p>
      <Button onClickFn={() => navigate("/vendorsList")} className={c.linkBtn}>
        صفحه لیست رستوران ها
      </Button>
    </div>
  );
};

export default NotFound;
