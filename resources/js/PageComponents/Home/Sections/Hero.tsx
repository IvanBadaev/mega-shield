import React from "react";
import HomeAnchors from "../../../Types/HomeAnchors";

type HeroProps = {
    anchors : HomeAnchors
}

const Hero = ({anchors} : HeroProps) => {
    return (
        <section className="hero container" id="hero">
            <div className="hero__top hero-top--desktop">
                <h1 className="hero__title hero__title--top">
                    Ваша безопасность
                </h1>
                <img
                    src="/images/Home/hero/wrapper-small.jpg"
                    alt="Обои (ЧОП)"
                    className="hero__bg--top"
                />
            </div>
            <div className="hero__bottom">
                <div className="hero__bottom-image-wrapper">
                    <picture>
                        <source media="(mAX-width:480px)" srcSet="/images/Home/hero/wrapper-big--mobile.png"/>
                        <source media="(min-width:480px)" srcSet="/images/Home/hero/wrapper-big.jpg"/>
                        <img
                        src="/images/Home/hero/wrapper-big.jpg"
                        alt="Обои (ЧОП)"
                        className="hero__bg--bottom"
                        />
                    </picture>
                    <h1 className="hero__title hero__title--bottom-left">
                        <span className="hero__title--grey">наша</span>
                    </h1>
                </div>

                <h1 className="hero__title hero__title--bottom-right">
                    работа
                </h1>
            </div>
            <a className="hero__contact-btn" href={anchors.contacts}>
                Обратная связь
            </a>
        </section>
    );
};

export default Hero;
