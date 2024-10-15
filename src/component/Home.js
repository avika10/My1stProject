import React from 'react'
import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "./SectionThree";
import '../home.css'
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import FAQSection from "./Faqs";
import CallToAction from "./FooterOne";
import Footer from "./FooterTwo";



const Home = () => {
  return (
    <div>
       <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <FAQSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
