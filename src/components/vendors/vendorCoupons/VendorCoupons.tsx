import { VendorT } from "src/types/types";
import classes from "./vendorCoupons.module.scss";
import clsx from "clsx";
import { CashIcon, ProIcon } from "src/assets/icons";
const VendorCoupons = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={classes.card_coupon}>
      <div>
        {vendor.best_coupon && (
          <div
            className={clsx(
              classes.card_coupon_info,
              vendor?.is_pro
                ? classes.card_coupon_pro
                : classes.card_coupon_default
            )}
          >
            {vendor?.is_pro && <ProIcon />}
            {vendor.best_coupon}
          </div>
        )}
        {vendor?.has_cashback && (
          <div
            className={clsx(
              classes.card_coupon_info,
              classes.card_coupon_default
            )}
          >
            <CashIcon />
            جایزه خرید
          </div>
        )}
      </div>
    </div>
  );
};
export default VendorCoupons;
