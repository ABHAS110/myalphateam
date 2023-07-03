import React, { useState } from 'react'
import Lottie from 'lottie-react'
import reach from '../Assets/newS/reach.json'
import famous from '../Assets/newS/famous.json'
import './Section4.css'

const Section4 = () => {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 200) : text}
                <span   style={{ color: "#FFE4E1", cursor: "pointer" }} onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " ...show less"}
                </span>
            </p>
        );
    };
    
    return (
        <>

            <div className="main-c">
                <div className="new">
                    <div className='content' data-aos="fade-right" data-aos-duration="1500">
                        <h3 className="title">Reach new <br /> audiences
                        </h3>
                        <div className="desc">

                            <ReadMore>
                                While we have worked on many projects in the past we have been networking at the same time.
                                    Our community consists partly out of powerful influencers and our own 100k followers on Twitter,
                                    including our big partners.

                                    Even more important is our Telegram. This channel consists of our private quality network of
                                    investors that are waiting to put their money in a trustable project. That is why Cryptoboom only
                                    works with honest and hard working developers.
                                    It goes without saying that our Twitter and Telegram are not our only way of reaching the desired audience.
                                    We have partners with bigger communities and followings, which we include in our marketing plans.
                               
                            </ReadMore>
                        </div>
                    </div>
                    <div className='image1' data-aos="fade-right" data-aos-duration="1500">
                        <Lottie className='lottie' animationData={reach}></Lottie>
                    </div>
                </div>
            </div>
            <div className="main-c">
                <div className="new">
                    <div className='image1' data-aos="fade-right" data-aos-duration="1500">
                        <Lottie className='lottie' animationData={famous}></Lottie>
                    </div>
                    <div className="content" data-aos="fade-right" data-aos-duration="1500">
                        <h3 class="title">Influencers</h3>
                        <div class="desc">
                            <p>The Cryptoboom team offers incubation for any service. For our clients that we take the marketing out your hands.
                                We will get you discounts on all marketing services. From calls and posts on Social Media
                                channels to listings on Exchanges.
                                Cryptoboom can arrange everything for their clients,
                                cost efficient and with high returns on investments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4