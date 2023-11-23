import { forwardRef } from "react";
import c from "./vendorLoading.module.scss";
const VendorLoading = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={c.loadingVendor} ref={ref}>
      <div className={c.loadingVendor_card}>
        <div className={c.loadingVendor_card_image}></div>
        <div className={c.loadingVendor_card_text}>
          <div className={c.loadingVendor_card_text_title}></div>
          <div className={c.loadingVendor_card_text_title}></div>
          <div className={c.loadingVendor_card_text_title}></div>
        </div>
      </div>
    </div>
  );
});
VendorLoading.displayName = "VendorLoading";
export default VendorLoading;
