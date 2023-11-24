import { VendorT } from "src/types/types";
import classes from "./vendorDetails.module.scss";
const VendorDetails = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={classes.vendorDetails}>
      <h3>
        {vendor.title}{" "}
        {vendor.discountValueForView !== 0 && (
          <span className={classes.vendorDetails_discount}>
            {`تا ${vendor.discountValueForView}%`}
          </span>
        )}
      </h3>
      <div className={classes.vendorDetails_description}>
        {vendor.description}
      </div>
      <div className={classes.vendorDetails_price}>
        <span className={classes.vendorDetails_price_caption}>
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
