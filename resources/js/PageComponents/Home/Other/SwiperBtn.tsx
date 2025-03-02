import React, { ReactNode } from "react";

type SwiperBtnProps = {
    sectionClass: string;
    direction: "left" | "right";
};
const SwiperBtnSvg = ({ sectionClass, direction }: SwiperBtnProps) => {
    const arrowPath: ReactNode =
        direction == "left" ? (
            <path
                d="M60 80.5L40 50.5L60 20.5"
                stroke="#606060"
                strokeWidth="3"
                strokeLinecap="round"
                className={`${sectionClass}__swiper-btn-arrow ${sectionClass}__swiper-btn-arrow--left`}
            />
        ) : (
            <path
                d="M40 80.5L60 50.5L40 20.5"
                stroke="#606060"
                strokeWidth="3"
                strokeLinecap="round"
                className={`${sectionClass}__swiper-btn-arrow ${sectionClass}__swiper-btn-arrow--right`}
            />
        );



    return (
        <svg
            width="100"
            height="101"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={sectionClass + "__swiper-btn-svg"}
        >
            <rect
                x="99.5"
                y="100"
                width="99"
                height="99"
                rx="49.5"
                transform="rotate(180 99.5 100)"
                stroke="#606060"
                className={sectionClass + "__swiper-btn-rect"}
            />
            <circle cx="50" cy="50" r="50" />
            {arrowPath}
        </svg>
    );
};

export default SwiperBtnSvg;
