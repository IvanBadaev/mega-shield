import React from 'react'
import SectionTitle from '../Other/SectionTitle'

const About = () => {
  return (
    <section className='about container' id="about">
      <SectionTitle sectionClass={'about'} sectionName={'О КОМПАНИИ'}/>
      <div className="about__content">
        <div className="about__text-wrapper">
            <p className="about__text about__text--top"><span className="about__text--highlight">МЕГА-ЩИТ</span> —  ЧАСТНАЯ ОХРАННАЯ ОРГАНИЗАЦИЯ, является одним из предприятий в Западной Сибири, осуществляющих деятельность охранных служб и систем обеспечения безопасности.</p>
            <p className="about__text about__text--bottom">Руководящий состав организации в основном состоит из кадровых офицеров Вооруженных Сил РФ, МВД, ФСБ, имеющих опыт работы в структурах, обеспечивающих безопасность.</p>
        </div>
        <div className="about__img-wrapper">
            <img src="/images/Home/about/photo.jpg" alt="Картинка для раздела О компании" className="about__img" />
        </div>
      </div>
    </section>
  )
}

export default About
