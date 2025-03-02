import React from "react";
import SectionTitle from "../Other/SectionTitle";
import Service from "../../../Types/Service";
import HomeAnchors from "../../../Types/HomeAnchors";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperBtnSvg from "../Other/SwiperBtn";

type ServicesProps = {
    anchors: HomeAnchors;
    services: Service[];
};

const Services = ({ anchors, services }: ServicesProps) => {
    const swiperBtnClasses = {
        prev: "services__prev-el-btn",
        next: "services__next-el-btn",
    };

    return (
        <section
            className={
                "services container " +
                (!services.length && "section-collapsed")
            }
            id="services"
        >
            <SectionTitle
                sectionClass={"services"}
                sectionName={"наши услуги"}
            />
            <div className="services__content">
                {services.map((service, index) => (
                    <article className="services__card" key={index}>
                        <div className="services__card-top">
                            <img
                                src={service.imgUrl}
                                alt={"Карточка услуги: " + service.name}
                                className="services__card-img"
                            />
                            <div className="services__card-title-wrapper">
                                <h2 className="services__card-title">
                                    {service.name}
                                </h2>
                            </div>
                        </div>
                        <div className="services__card-bottom">
                            <a
                                href={anchors.contacts}
                                className="services__order-link"
                            >
                                Заказать услугу
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            <div className="services__mobile">
                <div className="services__swiper">
                    <Swiper
                        slidesPerView={4}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            prevEl: `.${swiperBtnClasses.prev}`,
                            nextEl: `.${swiperBtnClasses.next}`,
                        }}
                        autoplay={{
                            delay: 5000,
                        }}
                        maxBackfaceHiddenSlides={0}
                        breakpoints={{
                            0 : {
                                slidesPerView : 1
                            },
                            640 : {
                                slidesPerView : 2
                            }   
                        }}
                        
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <article className="services__card" key={index}>
                                    <div className="services__card-top">
                                        <img
                                            src={service.imgUrl}
                                            alt={
                                                "Карточка услуги: " +
                                                service.name
                                            }
                                            className="services__card-img"
                                        />
                                        <div className="services__card-title-wrapper">
                                            <h2 className="services__card-title">
                                                {service.name}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="services__card-bottom">
                                        <a
                                            href={anchors.contacts}
                                            className="services__order-link"
                                        >
                                            Заказать услугу
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="services__btns-wrapper">
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
            </div>
        </section>
    );
};

export default Services;
