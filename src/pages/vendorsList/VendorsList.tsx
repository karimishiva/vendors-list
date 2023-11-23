import { Key } from "react";
import { VendorsT } from "src/types/types";
import useVendors from "src/hooks/useVendors";
import c from "./vendorsList.module.scss";
import VendorCard from "src/components/vendors/vendorCard/VendorCard";
const VendorsList = () => {
  const { data, vendors } = useVendors();

  return (
    <main className={c.vendorsList}>
      <h2
        className={c.vendorsList_openVendors}
      >{`${data?.data?.open_count} فروشنده باز `}</h2>
      <div className={c.vendorsList_container}>
        {vendors?.map((itm: VendorsT, index: Key) => {
          return (
            itm.type === "VENDOR" && (
              <VendorCard key={index} vendor={itm?.data} />
            )
          );
        })}
      </div>
    </main>
  );
};
export default VendorsList;
