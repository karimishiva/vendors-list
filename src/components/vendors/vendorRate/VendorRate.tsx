import { StarIcon } from "src/assets/icons";
import { VendorT } from "src/types/types";
import classes from "./vendorRate.module.scss";

const VendorRate = ({ vendor }: { vendor: VendorT }) => {
  const rateColor = (rate: number, type: string) => {
    let roundRate = Math.floor(rate * 10) - (Math.floor(rate * 10) % 5);
    roundRate = roundRate < 10 ? 10 : roundRate;

    return type === "color"
      ? `var(--text-rate-${roundRate})`
      : `var(--bg-rate-${roundRate})`;
  };
  return (
    <div className={classes.vendorSurvey}>
      <div className={classes.vendorSurvey_count}>
        ({vendor.voteCount.toLocaleString()})
      </div>
      <div
        className={classes.vendorSurvey_rate}
        style={{
          color: rateColor(vendor.rate, "color"),
          backgroundColor: rateColor(vendor.rate, "bg"),
        }}
      >
        <span>{vendor.rate}</span>
        <StarIcon />
      </div>
    </div>
  );
};
export default VendorRate;
