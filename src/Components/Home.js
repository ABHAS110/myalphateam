import React, {useEffect} from 'react'
import Navbar from './Navbar'
import computer from '../Assets/Hero/lot1.json'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from './Footer'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
    <div className='home-container'>
        <Navbar/>
    <div className="hero">
      <div className="lot hidden">
        <Lottie animationData={computer} />
      </div>
      {/* <h1 className='company hidden' data-aos="fade-up" data-aos-duration="1500">Alpha Team</h1> */}
      <h1 className='buisness' data-aos="fade-up" data-aos-duration="1500">Welcome to <span>Alpha Team</span></h1>
      <p className="subtitle" data-aos="fade-up" data-aos-duration="2000">We provide many services like marketing, listing (cex, cmc, cg), auiditing, development, AMAs, smart contract development, Press Release, project lauch, fundraise, community management,etc </p>
    <div className="sign-mobile">
    <button className="hidden join" data-aos="fade-up" data-aos-duration="1500">Let's Discuss</button>
    </div>
    </div>
    <div className="dashboard" data-aos="fade-up" data-aos-duration="2000">
    <Lottie animationData={computer} />
    </div>
    </div>
    <div className="section1">
      <Section1/>
    </div>
    <div className="section4">
      <Section4/>
    </div>
    <div className="section2">
      <Section2/>
    </div>
    <div className="section3">
      <Section3/>
    </div>    
    <Footer/>
    </>
  )
}
export default Home