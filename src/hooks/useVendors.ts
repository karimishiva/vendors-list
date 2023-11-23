import { useEffect } from "react";
import { VendorsListState } from "src/types/types";
import { useSelector } from "react-redux";
import { useFetchVendorsQuery } from "src/store";
function useVendors() {
  const { page, lat, long, vendors } = useSelector(
    (state: { vendorsList: VendorsListState }) => {
      return {
        page: state.vendorsList.page,
        lat: state.vendorsList.lat,
        long: state.vendorsList.long,
        vendors: state.vendorsList.vendors,
      };
    }
  );
  const { data, refetch } = useFetchVendorsQuery({
    page: page,
    page_size: 10,
    lat: 35.754,
    long: 51.328,
  });

  useEffect(() => {
    refetch();
  }, [page, lat, long, refetch]);

  return {
    data,
    vendors,
  };
}

export default useVendors;
