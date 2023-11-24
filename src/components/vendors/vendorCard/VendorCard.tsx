import { CashIcon, ProIcon } from "src/assets/icons";
import { VendorT } from "src/types/types";
import VendorDetails from "../vendorDetails/VendorDetails";
import VendorRate from "../vendorRate/VendorRate";
import c from "./vendorCard.module.scss";
import clsx from "clsx";
const VendorCard = ({ vendor }: { vendor: VendorT }) => {
  return (
    <div className={c.vendor}>
      <section className={c.card}>
        <a
          className={c.card_link}
          href={vendor.menuUrl}
          target='_blank'
          rel='noreferrer'
        >
          <div className={c.card_vendorBg}>
            <div className={c.card_vendorBg_imgContainer}>
              <img
                className={c.card_vendorBg_imgContainer_img}
                src={vendor.backgroundImage}
                alt='vendor'
              />
            </div>
            <div className={c.card_coupon}>
              <div>
                {vendor.best_coupon && (
                  <div
                    className={clsx(
                      c.card_coupon_info,
                      vendor?.is_pro ? c.card_coupon_pro : c.card_coupon_default
                    )}
                  >
                    {vendor?.is_pro && <ProIcon />}
                    {vendor.best_coupon}
                  </div>
                )}
                {vendor?.has_cashback && (
                  <div
                    className={clsx(c.card_coupon_info, c.card_coupon_default)}
                  >
                    <CashIcon />
                    جایزه خرید
                  </div>
                )}
              </div>
            </div>
            <div className={c.card_logo}>
              <img src={vendor.logo} alt='logo' className={c.card_logo_img} />
            </div>
          </div>
          <div className={c.card_vendorInfo}>
            <VendorDetails vendor={vendor} />
            <VendorRate vendor={vendor} />
          </div>
        </a>
      </section>
    </div>
  );
};

export default VendorCard;
