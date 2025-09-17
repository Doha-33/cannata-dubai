"use client";
import { useTranslation } from "react-i18next";
import motion from "./motionClient";
import { useRouter } from "next/navigation";
import './Home2.css'
const Home2 = ({ about }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const router = useRouter();

  return (
    <div className="container-fluid mt-5 pt-5" dir={isArabic ? "rtl" : "ltr"}>
      <div className="row">
        <motion.div
          className={`col-12 col-md-6 ${
            isArabic ? "order-2 order-md-1" : "order-1 order-md-1"
          }`}
          initial={{ opacity: 0, x: isArabic ? 150 : -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-5" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            {t("ABOUT COMPANY")}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: about?.about[isArabic ? "ar" : "en"] || "",
            }}
          />

          <div className="d-flex px-2 flex-lg-row">
            <div className="about d-flex flex-column justify-content-center align-items-center  px-2">
              <img src="/images/Frame20.png" alt="" />
              <img src="/images/Frame27.png" alt="" />
              <img src="/images/Frame23.png" alt="" />
              <img src="/images/Frame27.png" alt="" />
              <img src="/images/Frame30.png" alt="" />
            </div>
            <div className="py-4 px-2">
              <div className="pb-lg-3 pb-1">
                <h5>{t("AIR FREIGHT")}</h5>
                <p>{t("EXPRESS AND STANDARD CARGO SERVICES")}</p>
              </div>
              <div className="pb-lg-3 pb-1">
                <h5>{t("LAND TRANSPORT")}</h5>
                <p>
                  {t(
                    "COVERING GCC AND BEYOND, OFFERING DOOR-TO-DOOR DELIVERY."
                  )}
                </p>
              </div>
              <div className="pb-lg-3 pb-1">
                <h5>{t("DOOR-TO-DOOR SERVICES")}</h5>
                <p>
                  {t(
                    "COMPREHENSIVE HANDLING FROM ORIGIN TO FINAL DESTINATION."
                  )}
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn"
            style={{
              color: "white",
              backgroundColor: "rgb(45, 44, 111)",
            }}
            onClick={() => router.push(`${i18n.language}/about`)}
          >
            {t("Read More")}
          </button>
        </motion.div>

        <motion.div
          className={`col-12 col-md-6 position-relative px-1 ${
            isArabic ? "order-1 order-md-2" : "order-2 order-md-2"
          } triangle-sec d-none d-md-block`}
          initial={{ opacity: 0, x: isArabic ? -150 : 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            style={{
              clipPath: isArabic
                ? "polygon(0 0, 0 100%, 80% 100%)"
                : "polygon(100% 0, 100% 100%, 20% 100%)",
              backgroundColor: "rgb(45, 44, 111)",
              height: "600px",
            }}
          ></div>

            <img
              className="Jun-img"
              src="/images/ChatGPTImageJun.png"
              alt=""
              style={{
                position: "absolute",
                [isArabic ? "right" : "left"]: "25%",
                transform: "translateY(-100%)",
              }}
            />
        </motion.div>
      </div>
    </div>
  );
};

export default Home2;
