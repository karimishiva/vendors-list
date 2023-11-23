import { useEffect, useRef } from "react";
import { changePage } from "src/store";
import VendorLoading from "./VendorLoading";
import { useDispatch } from "react-redux";
const InfinitScrool = () => {
  const loadingRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const bottomPage = entries[0];
      if (bottomPage.isIntersecting) {
        dispatch(changePage());
      }
    });
    loadingRef.current && observer.observe(loadingRef.current);

    return () => {
      loadingRef.current && observer.unobserve(loadingRef.current);
    };
  }, [loadingRef]);
  return (
    <div>
      <VendorLoading ref={loadingRef} />
    </div>
  );
};

export default InfinitScrool;
