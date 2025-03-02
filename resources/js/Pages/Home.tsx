import React from 'react'
import HomeDefaultProps from '../CommonProps/HomeProps'
import Header from '../CommonComponents/Header'
import HomeAnchors from '../Types/HomeAnchors'
import HomeContacts from '../Types/HomeContacts'
import Contacts from '../PageComponents/Home/Sections/Contacts'
import Hero from '../PageComponents/Home/Sections/Hero'
import Stats from '../PageComponents/Home/Sections/Stats'
import About from '../PageComponents/Home/Sections/About'
import Services from '../PageComponents/Home/Sections/Services'
import News from '../PageComponents/Home/Sections/News'
import Staff from '../PageComponents/Home/Sections/Staff'
import Reviews from '../PageComponents/Home/Sections/Reviews'
import Vacancies from '../PageComponents/Home/Sections/Vacancies'
import Footer from '../CommonComponents/Footer'
import FooterSettings from '../Types/FooterSettings'
import Service from '../Types/Service'
import TypeNews from '../Types/News'
import StaffAnnouncement from '../Types/StaffAnnouncement'
import isDisplayedAnchors from '../Types/DisplayedAnchors'
import StatsSettings from '../Types/StatsSettings'
import VacancySettings from '../Types/VacancySettings'

type HomeProps = {
  services : Service[],
  news : TypeNews[],
  reviews : Review[],
  staffAnnouncements : StaffAnnouncement[],
  statsSettings : StatsSettings,
  vacancySettings : VacancySettings,
  footerSettings : FooterSettings,
}
type HomeDefaultProps = {
  anchors? : HomeAnchors,
  contacts? : HomeContacts,
}

const Home = ({services, news, reviews, staffAnnouncements, statsSettings, vacancySettings, footerSettings} : HomeProps) => {

  const { anchors, contacts } : HomeDefaultProps = HomeDefaultProps

  const isDisplayedAnchors : isDisplayedAnchors = {
    services : Boolean(services.length),
    news : Boolean(news.length),
    reviews : Boolean(reviews.length),
    staffAnnouncements : Boolean(staffAnnouncements.length),
  }

  return (
    <div>
      <Header anchors={anchors} isDisplayedAnchors={isDisplayedAnchors}/>
      <Hero anchors={anchors}/>
      <Stats statsSettings={statsSettings}/>
      <About />
      <Services anchors={anchors} services={services}/>
      <News news={news}/>
      <Staff staffAnnouncements={staffAnnouncements}/>
      <Reviews reviews={reviews}/>
      <Vacancies vacancySettings={vacancySettings} />
      <Contacts/>
      <Footer anchors={anchors} contacts={contacts} footerSettings={footerSettings}/>
    </div>
  )
}

export default Home
