import React, { useState } from "react";
import SectionTitle from "../Other/SectionTitle";
import StaffAnnouncement from "../../../Types/StaffAnnouncement";

type StaffProps = {
    staffAnnouncements : StaffAnnouncement[];
}

const Staff = ({staffAnnouncements} : StaffProps) => {

    const [isDescExpanded, setDescExpanded] = useState(-1)

    return (
        <section className={"staff container " + ((!staffAnnouncements.length) && "section-collapsed")} id="staff">
            <SectionTitle sectionClass="staff" sectionName="сотрудникам" />
            <div className="staff__content">
                {staffAnnouncements.map((item, index) => (
                    <article className="staff__card" key={index}>
                        <div className="staff__card-img-wrapper">
                            <img src={item.imgUrl} alt={'Картинка для объявления: ' + item.desc.slice(0, 15) + '...'} className="staff__card-img" />
                        </div>
                        <div className="staff__card-bottom">
                            <p className={`staff__card-desc ${(index !== isDescExpanded) ? "staff__card-desc--hidden" : ''}`}>{item.desc}</p>
                            {
                                (isDescExpanded === index) ?
                                    <button className="staff__card-expand-btn" onClick={() => {setDescExpanded(-1)}}>{'Скрыть'}</button> : 
                                    <button className="staff__card-expand-btn" onClick={() => {setDescExpanded(index)}}>{'Подробнее'}</button>
                            }
                            
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Staff;
