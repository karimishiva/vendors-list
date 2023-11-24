import { forwardRef } from "react";
import classes from "./vendorLoading.module.scss";
const VendorLoading = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.loadingVendor} ref={ref}>
      <div className={classes.loadingVendor_card}>
        <div className={classes.loadingVendor_card_image}></div>
        <div className={classes.loadingVendor_card_text}>
          <div className={classes.loadingVendor_card_text_title}></div>
          <div className={classes.loadingVendor_card_text_title}></div>
          <div className={classes.loadingVendor_card_text_title}></div>
        </div>
      </div>
    </div>
  );
});
VendorLoading.displayName = "VendorLoading";
export default VendorLoading;
