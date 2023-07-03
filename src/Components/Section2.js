import React, {useEffect} from 'react'
import './Section2.css'
import Lottie from 'lottie-react'
import finance from '../Assets/Section02/finance.json'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section2 = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    
    <div className='sec2'>
        <div className="left-text" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
            <h1 className='t1'>Easy collaborative financial team</h1>
            <p className='t2'>No need to worry about your files being lost because we are <br/> very loyal to be your storage platform.</p>
            <button className="free">Try for free</button>
        </div>
        <Lottie animationData={finance} className="dash" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine" ></Lottie>
    </div>
  )
}

export default Section2;
