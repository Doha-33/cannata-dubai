"use client";

import nextDynamic from "next/dynamic";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import Home7Client from "./Home7Client";

const MapComponent = nextDynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Home7({ locale }) {
  const isArabic = locale === "ar";

  return (
    <div className="row w-100 align-items-center justify-content-center m-0 p-0">
      <div className="col-12 col-md-6">
        <Home7Client isArabic={isArabic} />
      </div>
      <div className="col-12 col-md-6">
        <MapComponent />
      </div>
    </div>
  );
}
