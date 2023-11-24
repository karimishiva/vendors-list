import classes from "./vendorsList.module.scss";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import VirtualList from "src/components/virtualList/VirtualList";
import useVendors from "src/hooks/useVendors";
import clsx from "clsx";
import { BrandLogo } from "src/assets/icons";
import VendorLoading from "src/components/vendors/vendorLoading/VendorLoading";
const VendorsList = () => {
  const { vendors, isLoading, data } = useVendors();
  return (
    <main className={classes.vendorsList}>
      <div
        className={clsx(
          classes.vendorsList_openVendors,
          !data?.data?.open_count && !data?.data?.count ? "skeleton" : ""
        )}
      >
        {(data?.data?.open_count || data?.data?.count) && (
          <>
            <h2>{`${data?.data?.count || data?.data?.open_count} فروشنده ی  ${
              data?.data?.open_count ? "باز" : "بسته"
            } `}</h2>
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
            <VariableSizeList
              width={width}
              height={height}
              itemCount={vendors.length + 1}
              direction='rtl'
              itemSize={(index) =>
                vendors[index]?.type === "VENDOR" ? 260 : 0
              }
              itemData={vendors}
            >
              {VirtualList}
            </VariableSizeList>
          )}
        </AutoSizer>
      )}
    </main>
  );
};
export default VendorsList;
