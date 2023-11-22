import { Key } from "react";
import { useFetchVendorsQuery } from "src/store";
import { VendorsT, VendorsListState } from "src/types/types";
import { useSelector } from "react-redux";
const VendorsList = () => {
  const { data } = useFetchVendorsQuery({
    page: 0,
    page_size: 10,
    lat: 35.754,
    long: 51.328,
  });
  const vendors = useSelector(
    (state: { vendorsList: VendorsListState }) => state.vendorsList.vendors
  );
  return (
    <main>
      <h1>{data?.data?.count}</h1>
      {vendors?.map((itm: VendorsT, index: Key) => {
        return (
          <div key={index}>
            {itm.type === "VENDOR" && itm?.data?.description}
          </div>
        );
      })}
    </main>
  );
};
export default VendorsList;
