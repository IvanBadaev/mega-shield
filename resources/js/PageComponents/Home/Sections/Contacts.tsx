import React, { useState } from "react";
import SectionTitle from "../Other/SectionTitle";
import axios, { AxiosError } from "axios";

type Status = {
    success : null | boolean,
    pending : boolean,
    message : string,
}

const Contacts = () => {

    const [formData, setFormData] = useState({
        name : "",
        tel : "",
        comment : "",
    })
    const [status, setStatus] : [Status, Function] = useState({
        success : null,
        pending : false,
        message : "",
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({
            success : null,
            pending : true,
            message : ''
        })
        try {
            const response = await axios.post("http://127.0.0.1:8000/contact-form-submit", formData)
            setStatus({
                success : true,
                pending : false,
                message : "Заявка успешно отправлена!",
            });
            setFormData({
                name : "",
                tel : "",
                comment : ""
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
    <div className={`contacts__status ${(status.success) ? 'contacts__status--success' : 'contacts__status--failure'}`}>
        <p className="contacts__status-text">{status.message}</p>
    </div>

    const pendingIcon =
    <div className="contacts__pending-icon-wrapper">
        <img src="/images/Home/Common/pending-icon.png" alt="Иконка загрузки" className="contacts__pending-icon" />
    </div>

    return (
        <section className="contacts container" id="contacts">
            <SectionTitle sectionClass="contacts" sectionName="контакты" />
            <h1 className="contacts__subtitle">
                Оставьте ваши контакты и наш специалист с вами свяжется!
            </h1>
            <form action="" className="contacts__form" onSubmit={handleSubmit}>
                <div className="contacts__input-row">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Имя"
                        className="contacts__input-text"
                        onChange={(e) => {handleChange(e)}}
                        required
                    />
                    <input
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        placeholder="Телефон*"
                        onChange={(e) => {handleChange(e)}}
                        className="contacts__input-text"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="comment"
                    value={formData.comment}
                    placeholder="Ваш коментарий"
                    onChange={(e) => {handleChange(e)}}
                    required
                    className="contacts__input-text"
                />
                <input
                    type="submit"
                    value="Отправить заявку"
                    className="contacts__input-submit"
                />
                <div className="contacts__checkbox">
                    <input
                        type="checkbox"
                        name="policy"
                        id="policy"
                        className="contacts__input-checkbox"
                        required
                    />
                    <label
                        htmlFor="policy"
                        className="contacts__checkbox-label"
                    >
                        {`Я даю согласие на обработку моих персональных данных на
                        условиях определенных `}
                        <a href="/policy" className="contacts__policy-link">
                            Политикой конфиденциальности
                        </a>
                    </label>
                </div>
                <div className="contacts__status">
                    {
                        (status.pending) && pendingIcon
                    }
                    {
                        (status.success !== null) && statusMessage
                    }
                </div>
            </form>
        </section>
    );
};

export default Contacts;
