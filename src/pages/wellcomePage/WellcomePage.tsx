import { useNavigate } from "react-router-dom";
import Button from "src/components/button/Button";
import c from "./wellcomePage.module.scss";
const WellcomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={c.wellcomePageMain}>
      <p>برای رفتن به صفحه ی اصلی روی دکمه زیر کلیک کنید.</p>
      <Button onClickFn={() => navigate("/vendorsList")} className={c.linkBtn}>
        لیست رستوران ها
      </Button>
    </main>
  );
};

export default WellcomePage;
