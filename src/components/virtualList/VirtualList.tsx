import { VendorsT, VendorT } from "src/types/types";
import VendorCard from "src/components/vendors/vendorCard/VendorCard";
import InfinitScroll from "../vendors/vendorLoading/InfinitScroll";
import { CSSProperties } from "react";
const VirtualList = ({
  data,
  index,
  style,
}: {
  data: VendorsT[];
  index: number;
  style: CSSProperties;
}) => {
  const isLastItem = index === data.length;
  return (
    <div key={index} style={style}>
      {isLastItem && data.length !== 0 ? (
        <InfinitScroll />
      ) : data[index]?.type === "VENDOR" ? (
        <VendorCard vendor={data[index].data as VendorT} />
      ) : null}
    </div>
  );
};
export default VirtualList;
