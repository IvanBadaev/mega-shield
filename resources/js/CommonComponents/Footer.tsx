import React from "react";
import HomeAnchors from "../Types/HomeAnchors";
import HomeContacts from "../Types/HomeContacts";
import FooterSettings from "../Types/FooterSettings";

type FooterProps = {
    anchors: HomeAnchors;
    contacts: HomeContacts;
    footerSettings: FooterSettings;
};

const Footer = ({ anchors, contacts, footerSettings }: FooterProps) => {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <a href={anchors.header} className="footer__logo-link">
                            <img src="/images/Home/Common/logo--big.svg" alt="Логотип" className="footer__logo-img"/>
                        </a>
                    </div>
                    <div className="footer__top-left">
                        <div className="footer__column footer__column--address">
                            <div className="footer__column-wrapper footer__column-wrapper--address">
                                <h5 className="footer__column-title footer__column-subtitle">
                                    Адрес:{" "}
                                </h5>
                                <ul className="footer__column-items">
                                    <li className="footer__column-item">
                                        {footerSettings.region}{" "}
                                        <p className="footer__column-item--address-mobile">
                                        {footerSettings.street}
                                        </p>
                                    </li>
                                    <li className="footer__column-item footer__column-item--address-mobile-hide">
                                        {footerSettings.street}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <address className="footer__column footer__column--contacts">
                            <h5 className="footer__column-title footer__column-title--contacts">Контакты:</h5>
                            <div className="footer__column-wrapper footer__column-wrapper--contacts">
                                <ul className="footer__column-items footer__column-items--top">
                                    <li className="footer__column-item footer__column-item--contacts">
                                        <a
                                            href={`tel:${footerSettings.receptionBureauPhone}`}
                                            className="footer__link"
                                        >
                                            Приемная:{" "}
                                            {
                                                footerSettings.receptionBureauPhone
                                            }
                                        </a>
                                    </li>
                                    <li className="footer__column-item footer__column-item--contacts">
                                        <a
                                            href={`mailto:${footerSettings.receptionBureauEmail}`}
                                            className="footer__link"
                                        >
                                            {
                                                footerSettings.receptionBureauEmail
                                            }
                                        </a>
                                    </li>
                                </ul>
                                <ul className="footer__column-items">
                                    <li className="footer__column-item">
                                        <p className="footer__column-subtitle">Отдел по управлению персоналом:</p>
                                        <a
                                            href={`tel:${footerSettings.staffBureauPhone}`}
                                            className="footer__link"
                                        >
                                            <p className="footer__reception-phone">{footerSettings.staffBureauPhone},{" "}</p>
                                        </a>
                                    </li>
                                    <li className="footer__column-item">
                                        <a
                                            href={`mailto:${footerSettings.staffBureauEmail}`}
                                            className="footer__link"
                                        >
                                            {footerSettings.staffBureauEmail}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </address>
                    </div>
                    <div className="footer__top-right">
                        <div className="footer__column footer__column--mobile">
                            <div className="footer__phone-column-wrapper">
                                <h5 className="footer__column-title footer__column-subtitle">
                                    Телефон:
                                </h5>
                                <ul className="footer__column-items">
                                    <li className="footer__column-item">
                                        <a
                                                href={`tel:${footerSettings.staffBureauPhone}`}
                                                className="footer__link"
                                            >
                                        {footerSettings.staffBureauPhone}
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__column footer__column--schedule">
                            <h5 className="footer__column-title footer__column-subtitle">
                                График работы:
                            </h5>
                            <ul className="footer__column-items">
                                <li className="footer__column-item">
                                    {footerSettings.schedule}
                                </li>
                                <li className="footer__column-item footer__column-item--schedule-break">
                                    {footerSettings.scheduleBreak}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="footer__media">
                        {
                            footerSettings.viber && 
                            <a
                            href={footerSettings.viber}
                            className="footer__media-link"
                            >
                            <img src="/images/Home/footer/viber.svg" alt="Viber" />
                            </a>
                        }
                        {
                            footerSettings.whatsapp && 
                            <a
                            href={footerSettings.whatsapp}
                            className="footer__media-link"
                        >
                            <img src="/images/Home/footer/whatsapp.svg" alt="Viber" />
                        </a>
                        }
                        {
                            footerSettings.vk && 
                            <a
                            href={footerSettings.vk}
                            className="footer__media-link"
                        >
                            <img src="/images/Home/footer/vk.svg" alt="Viber" />

                        </a>
                        }
                    </div>
                    <a className="footer__to-top-btn" href={anchors.header}>
                        <img src="/images/Home/footer/arrow-top.svg" alt="Viber" />
                    </a>
                </div>
                <div className="footer__bottom">
                    <a href="/policy" className="footer__policy-link">
                        Политика конфиценциальности
                    </a>
                    <p className="footer__bottom-text">Все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
