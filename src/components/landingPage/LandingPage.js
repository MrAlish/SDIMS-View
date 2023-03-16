import React from "react";
import AboutUs from '../landingPage/aboutUs/AboutUs'
import Hero from '../landingPage/hero/Hero'
import Teams from '../../components/landingPage/teams/Teams'
import MainFooter from '../landingPage/mainFooter/MainFooter'
import ContactUs from '../landingPage/contactUs/ContactUs'



const LandingPage = () => {
  return (
    <>
      <div className="bg-slate-300 lg:pt-48 pt-20 lg:pb-10  ">
        <Hero  />
      </div>
      <Teams/>
      <AboutUs/>
      <ContactUs/>
      <MainFooter/>
    </>
  );
};

export default LandingPage;


