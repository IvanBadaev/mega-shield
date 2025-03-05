import React, { useState } from 'react'
import HomeAnchors from '../Types/HomeAnchors'
import isDisplayedAnchors from '../Types/DisplayedAnchors'

type HeaderProps = {
  anchors : HomeAnchors,
  isDisplayedAnchors : isDisplayedAnchors
}

const Header = ({anchors, isDisplayedAnchors} : HeaderProps) => {

  type navItem = {
    name : string,
    link : string,
    doDisplay : boolean,
  }
  const [isDisplayBurger, setDisplayBurger] = useState(false)

  const navItems : navItem[] = [
    {
      name : 'О компании',
      link : anchors.about,
      doDisplay : true,
    },
    {
      name : 'Новости',
      link : anchors.news,
      doDisplay : isDisplayedAnchors.news,
    },
    {
      name : 'Услуги',
      link : anchors.services,
      doDisplay : isDisplayedAnchors.services
    },
    {
      name : 'Отзывы',
      link : anchors.reviews,
      doDisplay : isDisplayedAnchors.reviews,
    },
    {
      name : 'Вакансии',
      link : anchors.vacancies,
      doDisplay : isDisplayedAnchors.vacancies,
    },
    {
      name : 'Сотрудникам',
      link : anchors.staff,
      doDisplay : isDisplayedAnchors.staffAnnouncements,
    },
    {
      name : 'Контакты',
      link : anchors.contacts,
      doDisplay : true,
    },
  ]

  const burgerCloseBtn =         
    <button className="header__burger-close-btn" onClick={() => {setDisplayBurger(false)}}>
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34.6405" height="3.26797" transform="translate(11.0918 35.5872) rotate(-45)" fill="url(#paint0_linear_498_3806)"/>
      <rect width="34.6405" height="3.26797" transform="translate(13.4023 11.0918) rotate(45)" fill="url(#paint1_linear_498_3806)"/>
      <defs>
      <linearGradient id="paint0_linear_498_3806" x1="17.3203" y1="3.26797" x2="17.3203" y2="8.35872e-08" gradientUnits="userSpaceOnUse">
      <stop stop-color="rgba(220, 95, 18, 1)"/>
      <stop offset="1" stop-color="rgba(193, 86, 21, 1)"/>
      </linearGradient>
      <linearGradient id="paint1_linear_498_3806" x1="17.3203" y1="3.26797" x2="17.3203" y2="8.35872e-08" gradientUnits="userSpaceOnUse">
      <stop stop-color="rgba(220, 95, 18, 1)"/>
      <stop offset="1" stop-color="rgba(193, 86, 21, 1)"/>
      </linearGradient>
      </defs>
    </svg>
  </button>

  const burgerMenu = 
  <aside className="header__burger-menu">
    <nav className="header__burger-menu-content">
      <div className="header__burger-close-btn-wrapper">
      {burgerCloseBtn}
      </div>
      <ul className='burger__links'>
      {navItems.map((item, index) => (
          (item.doDisplay) && 
          <li className="header__burger-item" key={index} onClick={() => {
            setDisplayBurger(false)
          }}>
            <a href={item.link} className="header__burger-link">{item.name}</a>
          </li>
        )
      )}
      </ul>

    </nav>
  </aside>

  const burgerBtnSvg = <svg width="35" height="13" viewBox="0 0 35 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="34" height="3" rx="1.5" fill="black"/>
  <rect x="0.5" y="0.5" width="34" height="3" rx="1.5" stroke="black"/>
  <rect x="10.5" y="9.5" width="24" height="3" rx="1.5" fill="black"/>
  <rect x="10.5" y="9.5" width="24" height="3" rx="1.5" stroke="black"/>
  </svg>
  

  return (
    <header className="header container" id="header">
      <div className="header__logo-wrapper">
        <img src="images/Home/Common/logo--big.svg" alt="logo" className="header__logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-items">
          {navItems.map((item, index) => 
          (item.doDisplay) && 
            <li className="header__nav-item" key={index}>
              <a href={item.link} className="header__nav-link">{item.name}</a>
            </li>
          )}
        </ul>
      </nav>
      <a className="header__contact-btn" href={anchors.contacts}>
        Обратная связь
      </a>
      <button className="header__burger-btn" onClick={() => {setDisplayBurger(true)}}>
        {burgerBtnSvg}
      </button>
      {isDisplayBurger && burgerMenu}
    </header>
  )
}

export default Header
