import c from "./vendorsList.module.scss";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import VirtualList from "src/components/virtualList/VirtualList";
import useVendors from "src/hooks/useVendors";
import clsx from "clsx";
import { BrandLogo } from "src/assets/icons";
import VendorLoading from "src/components/vendors/vendorLoading/VendorLoading";
const VendorsList = () => {
  const { vendors, isLoading, data } = useVendors();
  return (
    <main className={c.vendorsList}>
      <div
        className={clsx(
          c.vendorsList_openVendors,
          !data?.data?.count ? "skeleton" : ""
        )}
      >
        {data?.data?.count && (
          <>
            <h2>{`${data?.data?.count} فروشنده ی  باز `}</h2>
            <BrandLogo height='36px' />
          </>
        )}
      </div>
      {isLoading && vendors.length === 0 ? (
        <>
          {[...new Array(9)].map((_, index) => (
            <VendorLoading key={index} />
          ))}
        </>
      ) : (
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => (
            <FixedSizeList
              width={width}
              height={height}
              itemCount={vendors.length + 1}
              direction='rtl'
              itemSize={240}
              itemData={vendors}
            >
              {VirtualList}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </main>
  );
};
export default VendorsList;
