import { VendorsT, VendorT } from "src/types/types";
import VendorCard from "src/components/vendors/vendorCard/VendorCard";
import InfinitScrool from "../vendors/vendorLoading/infiniteScroll";
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
        <InfinitScrool />
      ) : (
        data[index]?.type === "VENDOR" && (
          <VendorCard vendor={data[index].data as VendorT} />
        )
      )}
    </div>
  );
};
export default VirtualList;
