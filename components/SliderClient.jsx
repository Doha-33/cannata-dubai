"use client";

import React, { useRef, useEffect } from "react";
import "./Slider.css";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function SliderClient({ slides}) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const router = useRouter();
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;

    const sliderItems = sliderList.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add("next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add("prev");
    }

    slider.addEventListener(
      "animationend",
      () => {
        slider.classList.remove("next");
        slider.classList.remove("prev");
      },
      { once: true }
    );
  };

  return (
    <div className={`slider mb-5 ${isArabic ? "rtl" : ""}`} ref={sliderRef}>
      <div className="list" ref={sliderListRef}>
        {slides.map(
          (slide) =>
            slide &&
            slide.title &&
            slide.desc &&
            slide.btn_text && (
              <div
                className="item"
                key={slide.id}
                dir={isArabic ? "rtl" : "ltr"}
              >
                <img loading="lazy" src={slide.image} alt={slide.image_alt || "slide"} />
                <div className="content">
                  <h2 className="title">
                    {isArabic ? slide.title.ar : slide.title.en}
                  </h2>
                  <div className="description">
                    {isArabic ? slide.desc.ar : slide.desc.en}
                  </div>
                  <div className="button">
                    <button onClick={() => router.push(`/${i18n.language}/services`)}>
                      {isArabic ? slide.btn_text.ar : slide.btn_text.en}
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {slides.map(
          (slide) =>
            slide && (
              <div className="item" key={slide.id}>
                <img loading="lazy" src={slide.image} alt={slide.image_alt || "thumb"} />
              </div>
            )
        )}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => moveSlider("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
}
