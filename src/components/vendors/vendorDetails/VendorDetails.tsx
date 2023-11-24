import { VendorT } from "src/types/types";
import c from "./vendorDetails.module.scss";
const VendorDetails = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={c.vendorDetails}>
      <h3>
        {vendor.title}{" "}
        {vendor.discountValueForView !== 0 && (
          <span className={c.vendorDetails_discount}>
            {`تا ${vendor.discountValueForView}%`}
          </span>
        )}
      </h3>
      <div className={c.vendorDetails_description}>{vendor.description}</div>
      <div className={c.vendorDetails_price}>
        <span className={c.vendorDetails_price_caption}>
          {vendor.isZFExpress ? " ارسال اکسپرس" : " پیک فروشنده"}
        </span>
        {vendor.deliveryFee
          ? `${vendor.deliveryFee.toLocaleString()} تومان`
          : "رایگان"}
      </div>
    </div>
  );
};
export default VendorDetails;
