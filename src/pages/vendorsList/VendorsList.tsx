import { useEffect, useRef } from "react";
import { VendorsT } from "src/types/types";
import useVendors from "src/hooks/useVendors";
import c from "./vendorsList.module.scss";
import VendorCard from "src/components/vendors/vendorCard/VendorCard";
import { useDispatch } from "react-redux";
import { changePage } from "src/store";
import VendorLoading from "src/components/vendors/vendorLoading/VendorLoading";
const VendorsList = () => {
  const { data, vendors } = useVendors();
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

  return (
    <main className={c.vendorsList}>
      <h2
        className={c.vendorsList_openVendors}
      >{`${data?.data?.data?.open_count} فروشنده باز `}</h2>

      <div className={c.vendorsList_container}>
        {vendors?.map((itm: VendorsT, index: number) => {
          return (
            itm.type === "VENDOR" && (
              <VendorCard key={index} vendor={itm?.data} />
            )
          );
        })}
        <VendorLoading ref={loadingRef} />
      </div>
    </main>
  );
};
export default VendorsList;
