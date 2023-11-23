import { useEffect, useRef } from "react";
import { VendorsListState } from "src/types/types";
import { useSelector, useDispatch } from "react-redux";
import { useLazyFetchVendorsQuery } from "src/store/apis/vendorsApi";
import { changePage } from "src/store";
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
    page != 0 &&
      getData({
        page: page,
        page_size: 10,
        lat: 35.754,
        long: 51.328,
      });
  }, [page, lat, long]);
  const loadingRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const bottomCardEntry = entries[0];
      if (bottomCardEntry.isIntersecting) {
        dispatch(changePage());
      }
    });
    loadingRef.current && observer.observe(loadingRef.current);

    return () => {
      loadingRef.current && observer.unobserve(loadingRef.current);
    };
  }, [loadingRef]);

  return {
    data,
    vendors,
    loadingRef,
    isLoading,
  };
}

export default useVendors;
