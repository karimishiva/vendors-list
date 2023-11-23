import { VendorsT } from "src/types/types";
import useVendors from "src/hooks/useVendors";
import c from "./vendorsList.module.scss";
import VendorCard from "src/components/vendors/vendorCard/VendorCard";
import VendorLoading from "src/components/vendors/vendorLoading/VendorLoading";
import clsx from "clsx";
const VendorsList = () => {
  const { data, vendors, loadingRef, isLoading } = useVendors();

  return (
    <main className={c.vendorsList}>
      <h2
        className={clsx(
          c.vendorsList_openVendors,
          isLoading && c.loading_openVendors,
          isLoading && "skeleton"
        )}
      >
        {!isLoading && `${data?.data?.open_count} فروشنده باز `}
      </h2>

      <div className={c.vendorsList_container}>
        {vendors?.map((itm: VendorsT, index: number) => {
          return (
            itm.type === "VENDOR" && (
              <VendorCard key={index} vendor={itm?.data} />
            )
          );
        })}
        {isLoading &&
          [...new Array(9)].map((_, index) => <VendorLoading key={index} />)}
        <VendorLoading ref={loadingRef} />
      </div>
    </main>
  );
};
export default VendorsList;
