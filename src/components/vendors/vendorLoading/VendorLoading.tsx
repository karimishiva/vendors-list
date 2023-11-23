import { forwardRef } from "react";

const VendorLoading = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>loading</div>;
});
VendorLoading.displayName = "VendorLoading";
export default VendorLoading;
