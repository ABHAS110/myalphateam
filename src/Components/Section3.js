import React from 'react'
import Lottie from 'lottie-react'
import services from '../Assets/Section03/services.json'
import cig from '../Assets/Section03/cig.png'
import cmc from '../Assets/Section03/cmc.png'
import dext from '../Assets/Section03/dext.png'
import pink from '../Assets/Section03/pink.png'
import cyber from '../Assets/Section03/cyber.png'
import solid from '../Assets/Section03/solid.png'
import az from '../Assets/Section03/az.png'
import bf from '../Assets/Section03/bf.png'
import binance from '../Assets/Section03/binance.png'
import bm from '../Assets/Section03/bm.png'
import cons from '../Assets/Section03/cons.png'
import fnx from '../Assets/Section03/fnx.png'
import gate from '../Assets/Section03/gate.png'
import hub from '../Assets/Section03/hub.png'
import kucoin from '../Assets/Section03/kucoin.png'
import './Section3.css'
const Section3 = () => {
  return (
    <>
    <div className="main-section">
      <div className="sec3">
        <div className="service">
          <div className="lottie" data-aos="fade-right" data-aos-duration="1500">
            <Lottie className='img' animationData={services}/>
          </div>
          <div className="content" data-aos="fade-right" data-aos-duration="1500">
            <h3 className='title'>Our Partners & <br/> Services</h3>
            <div className="dis">
              <p>We have a wide portfolio of marketing services.
              <br/>
               We have partnered up with different CEX's, marketeers, incubators and influencers. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <section>
      <div className="partner-brand">
          <h2 className="partner-title" data-aos="fade-up" data-aos-duration="1500">
            Partners & Platforms
          </h2>
          <div className="list" data-aos="fade-up" data-aos-duration="2000">
            <div className="item"><img src={cig} alt="" /></div>
            <div className="item"><img src={cmc} alt="" /></div>
            <div className="item"><img src={dext} alt="" /></div>
            <div className="item"><img src={pink} alt="" /></div>
            <div className="item"><img src={cyber} alt="" /></div>
            <div className="item"><img src={solid} alt="" /></div>
          </div>
          </div>
          <h2 className="ex-title" data-aos="fade-up" data-aos-duration="1500">
            Exchanges
          </h2>
          <div className="marquee">
            <ul className="marquee-content">
              <li><img src={az} alt="" /></li>
              <li><img src={binance} alt="" /></li>
              <li><img src={bf} alt="" /></li>
              <li><img src={bm} alt="" /></li>
              <li><img src={cons} alt="" /></li>
              <li><img src={fnx} alt="" /></li>
              <li><img src={gate} alt="" /></li>
              <li><img src={hub} alt="" /></li>
              <li><img src={kucoin} alt="" /></li>
              <li><img src={az} alt="" /></li>
              <li><img src={binance} alt="" /></li>
              <li><img src={bf} alt="" /></li>
              <li><img src={bm} alt="" /></li>
              <li><img src={cons} alt="" /></li>
              <li><img src={fnx} alt="" /></li>
              <li><img src={gate} alt="" /></li>
              <li><img src={hub} alt="" /></li>
              <li><img src={kucoin} alt="" /></li>
            </ul>
          </div>
      
      </section>
      
    </>
  )
}

export default Section3