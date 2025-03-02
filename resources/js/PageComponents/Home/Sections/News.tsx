import React from "react";

import SectionTitle from "../Other/SectionTitle";
import TypeNews from "../../../Types/News";
import SwiperBtnSvg from "../Other/SwiperBtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";

type NewsProps = {
    news : TypeNews[],
}

const News = ({news} : NewsProps) => {

    const swiperBtnClasses = {
        prev: "news__prev-el-btn",
        next: "news__next-el-btn",
    };

    return (
        <section className={"news container " + ((!news.length) && "section-collapsed")} id="news">
            <SectionTitle sectionClass={"news"} sectionName={"Новости"} />
            <div className="news__content">
                <div className="news__btn-wrapper">
                    <button
                        className={
                            "news__nav-btn news__nav-btn--prev " +
                            swiperBtnClasses.prev
                        }
                    >
                        <SwiperBtnSvg direction="left" sectionClass="news" />
                    </button>
                </div>

                <div className="news__swiper-wrapper">
                    <Swiper
                        slidesPerView={3}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        navigation={{
                            prevEl: `.${swiperBtnClasses.prev}`,
                            nextEl: `.${swiperBtnClasses.next}`,
                        }}
                        autoplay={{
                            delay : 5000
                        }}
                        breakpoints={{
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 1,
                            },
                            640: {
                                slidesPerView : 2,
                            },
                            1024: {
                              slidesPerView: 3,
                            }
                          }}
                    >
                        {news.map((item, index) => (
                            <SwiperSlide key={index}>
                                <article className="news__card">
                                    <div className="news__card-img-wrapper">
                                        <img
                                            src={item.imgUrl}
                                            alt={`Картинка новости: ${item.desc.slice(
                                                15
                                            )}...`}
                                            className="news__card-img"
                                        />
                                    </div>
                                    <div className="news__card-bottom">
                                        <p className="news__card-date">
                                            {item.date}
                                        </p>
                                        <h2 className="news__card-title">
                                            {item.desc}
                                        </h2>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="news__btn-wrapper">
                    <button
                        className={
                            "news__nav-btn news__nav-btn--next " +
                            swiperBtnClasses.next
                        }
                    >
                        <SwiperBtnSvg direction="right" sectionClass="news" />
                    </button>
                </div>
            </div>
            <div className="news__mobile-btns-wrapper">
                    <div className="services__btn-wrapper">
                        <button
                            className={
                                "services__nav-btn services__nav-btn--prev " +
                                swiperBtnClasses.prev
                            }
                        >
                            <SwiperBtnSvg direction="left" sectionClass="services" />
                        </button>
                    </div>
                    <div className="services__btn-wrapper">
                        <button
                            className={
                                "services__nav-btn services__nav-btn--next " +
                                swiperBtnClasses.next
                            }
                        >
                            <SwiperBtnSvg direction="right" sectionClass="services" />
                        </button>
                    </div>
                </div>
        </section>
    );
};

export default News;
