import { VendorT } from "src/types/types";
import c from "./vendorDetails.module.scss";
const VendorDetails = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={c.vendorDetails}>
      <h3>{vendor.title}</h3>
      <div className={c.vendorDetails_description}>{vendor.description}</div>
      <div className={c.vendorDetails_price}>
        <span className={c.vendorDetails_price_caption}>ارسال اکسپرس</span>
        {`${vendor.deliveryFee} تومان`}
      </div>
    </div>
  );
};
export default VendorDetails;
