import React, { useState } from "react";
import SectionTitle from "../Other/SectionTitle";
import Vacancy from "../../../Types/Vacancy";
import axios, { AxiosError } from "axios";
import VacancySettings from "../../../Types/VacancySettings";

type VacanciesProps = {
    vacancySettings : VacancySettings,
}
type Status = {
    success : null | boolean,
    pending : boolean,
    message : string,
}

const Vacancies = ({vacancySettings} : VacanciesProps) => {

    const [status, setStatus] : [Status, Function] = useState({
        success : null,
        pending : false,
        message : "",
    });
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        tel : '',
        mail : '',
        resumeLink : '',
    })
    const [isCollapseMobileConditions, setCollapseMobileConditions] = useState(false)

    const [windowWidth, setWindowWidth] = useState({})

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({
            success : null,
            pending : true,
            message : ''
        })
        try {
            const response = await axios.post("/vacancy-form-submit", formData);
            setStatus({
                success : true,
                pending : false,
                message : "Отклик успешно отправлен!"
            })
            setFormData({
                firstName : '',
                lastName : '',
                tel : '',
                mail : '',
                resumeLink : '',
            })
        } catch(error) {
            console.log(error);
            if (error instanceof AxiosError && error.response) {
                setStatus({
                    success : false,
                    pending : false,
                    message : Object.values(error.response.data.errors)[0],
                })  
            }
        }
    }

    const statusMessage = 
    <div className={`vacancies__status ${(status.success) ? 'vacancies__status--success' : 'vacancies__status--failure'}`}>
        <p className="vacancies__status-text">{status.message}</p>
    </div>
    
    const pendingIcon =
    <div className="contacts__pending-icon-wrapper">
        <img src="/images/Home/Common/pending-icon.png" alt="Иконка загрузки" className="contacts__pending-icon" />
    </div>


    return (vacancySettings.name && 
        <section className="vacancies container" id="vacancies">
            <SectionTitle sectionClass="vacancies" sectionName="вакансии" />
            <div className="vacancies__content">
                <div className="vacancies__announcement">
                    <img src={vacancySettings.imgUrl} alt={"Изображение для объявления: " + vacancySettings.name} className="vacancies__bg" />
                    <div className="vacancies__announcement-top">
                        <h2 className="vacancies__vacancy-title">
                            {vacancySettings.name}
                        </h2>
                        <p className="vacancies__vacancy-wage">
                            Заработная плата: {vacancySettings.salary}
                        </p>
                    </div>
                    <div className="vacancies__announcement-bottom">
                        <h3 className="vacancies__requirements-title">
                            Требования:
                        </h3>
                        <ul className="vacancies__requirements-items vacancies__list-items" dangerouslySetInnerHTML={{__html : vacancySettings.requirements}}>
                        </ul>
                        <h3 className="vacancies__responsibilities-title">
                            Обязанности:
                        </h3>
                        <ul className="vacancies__responsibilities-items vacancies__list-items" dangerouslySetInnerHTML={{__html : vacancySettings.responsibilities}}>
                        </ul>
                    </div>
                </div>
                <div className="vacancies__bottom-container">
                    <div className="vacancies__conditions">
                        <h2 className="vacancies__conditions-title">Условия</h2>
                        <div className="vacancies__conditions-items">
                            <ul className={`vacancies__conditions-list ${(!isCollapseMobileConditions) && 'vacancies__conditions-list--collapsed'}`} dangerouslySetInnerHTML={{__html : vacancySettings.conditions}}>
                            </ul>
                        </div>
                        <button className="vacancies__collapse-conditions-btn" onClick={() => {
                            setCollapseMobileConditions(!isCollapseMobileConditions)
                        }}>
                            {(isCollapseMobileConditions) ? "Скрыть" : "Подробнее..."}
                        </button>
                    </div>
                    <form className="vacancies__form" onSubmit={handleSubmit}>
                        <div className="vacancies__input-row">
                            <input type="text" placeholder="Имя*" className="vacancies__input-text" name="firstName" onChange={(e) => handleChange(e)} required />
                            <input type="text" placeholder="Фамилия*" className="vacancies__input-text" name="lastName" onChange={(e) => handleChange(e)} required />
                        </div>
                        <div className="vacancies__input-row">
                            <input type="text" placeholder="Телефон*" className="vacancies__input-text" name="tel" onChange={(e) => handleChange(e)} required />
                            <input type="text" placeholder="Email" className="vacancies__input-text" name="mail" onChange={(e) => handleChange(e)} required />
                        </div>
                        <input type="text" placeholder="Ссылка на резюме*" className="vacancies__input-text" name="resumeLink" onChange={(e) => handleChange(e)} required />
                        <input type="submit" value="Отправить резюме" className="vacancies__input-submit"/>
                        {
                            (status.pending) && pendingIcon
                        }
                        {
                            (status.success !== null) && statusMessage
                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Vacancies;
