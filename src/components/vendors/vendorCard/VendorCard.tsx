import { VendorT } from "src/types/types";
import VendorDetails from "../vendorDetails/VendorDetails";
import VendorRate from "../vendorRate/VendorRate";
import classes from "./vendorCard.module.scss";
import VendorCoupons from "../vendorCoupons/VendorCoupons";
const VendorCard = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={classes.vendor}>
      <section className={classes.card}>
        <a
          className={classes.card_link}
          href={vendor.menuUrl}
          target='_blank'
          rel='noreferrer'
        >
          <div className={classes.card_vendorBg}>
            <div className={classes.card_vendorBg_imgContainer}>
              <img
                className={classes.card_vendorBg_imgContainer_img}
                src={vendor.backgroundImage}
                alt='vendor'
              />
            </div>
            <VendorCoupons vendor={vendor} />
            <div className={classes.card_logo}>
              <img
                src={vendor.logo}
                alt='logo'
                className={classes.card_logo_img}
              />
            </div>
          </div>
          <div className={classes.card_vendorInfo}>
            <VendorDetails vendor={vendor} />
            <VendorRate vendor={vendor} />
          </div>
        </a>
      </section>
    </div>
  );
};

export default VendorCard;
