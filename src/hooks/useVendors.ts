import { useEffect } from "react";
import { VendorsListState } from "src/types/types";
import { useSelector } from "react-redux";
import { useLazyFetchVendorsQuery } from "src/store/apis/vendorsApi";
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
  const [getData, { isFetching: isLoading, data }] = useLazyFetchVendorsQuery();

  useEffect(() => {
    getData({
      page: page,
      page_size: 10,
      lat: 35.754,
      long: 51.328,
    });
  }, [page, lat, long]);

  return {
    data,
    vendors,
    isLoading,
  };
}

export default useVendors;
