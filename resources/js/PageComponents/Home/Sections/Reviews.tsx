import React, { useState } from "react";
import SectionTitle from "../Other/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

import ReviewStars from "../Other/ReviewStars";

type ReviewsProps = {
    reviews : Review[],
}

const Reviews = ({reviews} : ReviewsProps) => {

    const folderSvg =                                             
    <svg
    width="31"
    height="28"
    viewBox="0 0 31 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M6.4585 0.875C3.375 0.875 0.833496 3.4165 0.833496 6.5V21.5C0.833496 24.5835 3.375 27.125 6.4585 27.125H23.1138C24.6738 27.125 26.0728 26.3706 26.9663 25.3672C27.8525 24.3711 28.3506 23.1772 28.6729 21.9907L30.4966 17.0981C31.229 14.3809 30.3208 12.125 28.9585 11.1582C28.0503 10.5137 27.6182 10.6089 27.0835 10.5503V8.375C27.0835 6.771 26.0361 5.39404 25.0327 4.94727C24.0366 4.50049 23.1357 4.63232 23.1357 4.63232L23.3335 4.625H16.6099L13.4092 1.42432C13.0576 1.07275 12.5815 0.875 12.0835 0.875H6.4585ZM6.4585 4.625H11.3071L14.5078 7.82568C14.8594 8.17725 15.3354 8.375 15.8335 8.375H23.3335C23.3994 8.375 23.4653 8.36768 23.5312 8.36035C23.5312 8.36035 23.5679 8.39697 23.5093 8.36768C23.4434 8.3457 23.3335 7.89893 23.3335 8.375V12.125C23.3335 13.1577 24.1758 14 25.2085 14C27.0835 14 27.1714 15.3184 26.8711 16.1167L25.0474 21.0093C24.8276 21.8296 24.4907 22.5107 24.1611 22.877C23.8315 23.2505 23.6265 23.375 23.1138 23.375H6.4585C5.38916 23.375 4.5835 22.5693 4.5835 21.5V6.5C4.5835 5.43067 5.4624 5.01318 6.4585 4.625Z"
        fill="#DC5F12"
    />
    <path
        d="M13.9583 10.25L14.0389 10.2573C12.325 10.1768 10.7576 10.9897 9.92268 12.0737C8.58967 14.3662 7.75471 16.3438 6.54621 19.0464C6.22395 20.0278 6.76594 21.0898 7.74738 21.4121C8.73615 21.7344 9.79817 21.1924 10.1131 20.2109C11.0286 18.314 11.8416 16.8052 12.6253 14.9448C13.0208 14 13.9437 14.022 14.3099 14H25.2083C26.241 14 27.0833 13.1577 27.0833 12.125C27.0833 11.0923 26.241 10.25 25.2083 10.25H13.9583Z"
        fill="#DC5F12"
    />
    </svg>

    const [displayReplyIndex, setDisplayReplyIndex]: [number, Function] =
        useState(-1);

    return (
        <section className={"reviews " + ((!reviews.length) && " section-collapsed")} id="reviews">
            <SectionTitle sectionClass="reviews" sectionName="Отзывы" />
            <div className="reviews__content">
                <div className="reviews__swiper-wrapper">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        modules={(displayReplyIndex === -1) ? [Pagination, ] : [Pagination]}
                        loop={true}
                        centeredSlides={false}
                        autoplay={{
                            delay: 5000,
                        }}
                        pagination={{ 
                            clickable: true,
                            el : '.reviews__pagination',
                         }}
                         breakpoints={{
                            0 : {
                                slidesPerView: 1,
                            },
                            480: {
                              slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 2,
                            },
                            1200: {
                              slidesPerView: 3,
                            },
                            1500: {
                                slidesPerView: 4 ,
                            }
                          }}
                    >
                        {reviews.map((item, reviewIndex) => (
                            <SwiperSlide key={reviewIndex}>
                                <article className={`reviews__card ${(displayReplyIndex === reviewIndex) && 'reviews__card--full'}`}>
                                    <div className="reviews__card-content-wrapper">
                                        <div className="reviews__card--left">
                                            <div className="reviews__card-profile-wrapper">
                                                <img
                                                    src={item.avatarImgUrl}
                                                    alt={"Картинка автора отзыва"}
                                                    className="reviews__card-profile-img"
                                                />
                                            </div>
                                        </div>
                                        <div className="reviews__card--right">
                                            <div className="reviews__card-stars">
                                                <ReviewStars
                                                    starsCount={item.starsCount}
                                                />
                                            </div>
                                            <p className={`reviews__card-review-content ${(displayReplyIndex === reviewIndex) && 'reviews__card-review-content--full'}`}>
                                                {item.reviewText}
                                            </p>
                                            <button
                                            className="reviews__card-expand-btn reviews__card-expand-btn--desktop"
                                            onClick={() => {
                                                (displayReplyIndex === reviewIndex) ?
                                                setDisplayReplyIndex(-1) : setDisplayReplyIndex(reviewIndex)
                                            }}
                                        >
                                            {folderSvg}
                                            {
                                            (displayReplyIndex === reviewIndex)
                                                ? "Скрыть"
                                                : (item.reviewResponse) ? "Посмотреть ответ от компании" : "Посмотреть отзыв полностью"}
                                        </button>
                                            <p
                                                className={`reviews__card-response ${
                                                    (displayReplyIndex !== reviewIndex) &&
                                                    "reviews__card-response--hidden"
                                                }`}
                                            >
                                                {item.reviewResponse && item.reviewResponse}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                    className="reviews__card-expand-btn reviews__card-expand-btn--mobile"
                                    onClick={() => {
                                        (displayReplyIndex === reviewIndex) ?
                                        setDisplayReplyIndex(-1) : setDisplayReplyIndex(reviewIndex)
                                    }}
                                >
                                    {folderSvg}
                                    {
                                    (displayReplyIndex === reviewIndex)
                                        ? "Скрыть"
                                        : (item.reviewResponse) ? "Посмотреть ответ от компании" : "Посмотреть отзыв полностью"}
                                </button>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="reviews__pagination-wrapper">
                <div className="reviews__pagination">
                </div>
            </div>

        </section>
    );
};

export default Reviews;
