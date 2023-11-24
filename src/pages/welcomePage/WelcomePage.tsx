import { useNavigate } from "react-router-dom";
import { BrandLogo } from "src/assets/icons";
import Button from "src/components/button/Button";
import classes from "./welcomePage.module.scss";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={classes.wellcomePageMain}>
      <BrandLogo />
      <p>برای رفتن به صفحه ی اصلی روی دکمه زیر کلیک کنید.</p>
      <Button
        onClickFn={() => navigate("/vendorsList")}
        className={classes.linkBtn}
      >
        لیست رستوران ها
      </Button>
    </main>
  );
};

export default WelcomePage;
