import { useState, useEffect } from "react";
import "./Section1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import ser from "../Assets/Section01/services.json";
import designidea from "../Components/designidea.png"
import marketing from "../Components/marketing.png"
import cfx from "../Components/cfx.png"
import cmc from "../Components/cmc.png"

const Section1 = () => {
  const [items, setItems] = useState([]);
  const [main, setMain] = useState([]);
  const [visible, setVisible] = useState(2);
  const showMoreS = () => {
    setVisible((prevValue) => prevValue + 1);
  };
  const left = [
    {
      id: 1,
      head: "CEX Listing",
      icon:cfx,
    },
    {
      id: 2,
      head: "CMC Listing (pre)",
      icon:cmc,
    },
    {
      id: 3,
      head: "CMC Listing (post)",
    },
    {
      id: 4,
      head: "CG Listing (pre)",
    },
    {
      id: 5,
      head: "CG Listing (post)",
    },
    {
      id: 6,
      head: "Marketing Software",
    },
    {
      id: 7,
      head: "Smart Contact Development",
    },
    {
      id: 8,
      head: "Press Release",
    },
    {
      id: 9,
      head: "Development Services",
    },
    {
      id: 10,
      head: "Consultation",
    },
    {
      id: 11,
      head: "DeFi Platform",
    },
    {
      id: 12,
      head: "Centralized Exchange",
    },
  ];
  const right = [
    {
      id: 13,
      head: "Design Services",
      icon:designidea,
    },
    {
      id: 14,
      head: "Marketing",
      icon:marketing,
    },
    {
      id: 15,
      head: "Community Managers",
    },
    {
      id: 16,
      head: "Moderators",
      
    },
    {
      id: 17,
      head: "Content Writers",
    },
    {
      id: 18,
      head: "Auditing",
    },
    {
      id: 19,
      head: "Coinsniper Voting",
    },
    {
      id: 20,
      head: "Fundraise & Launch",
    },
    {
      id: 21,
      head: "AMA's",
    },
    {
      id: 22,
      head: "Airdrop Campaign",
    },
    {
      id: 23,
      head: "Trading Support",
    },
    {
      id: 24,
      head: "Community Management",
    },
  ];

  useEffect(() => {
    setItems(left);
    setMain(right);
    AOS.init();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cont" data-aos="fade-up" data-aos-duration="1500">
        <div className="details">
          <div className="project">
            <span>100+</span>
            <p>Successful Projects</p>
          </div>
          <div className="project">
            <span>150+</span>
            <p>KOLs</p>
          </div>
          <div className="project">
            <span>15+</span>
            <p>Exchanges</p>
          </div>
          <div className="project">
            <span>10M+</span>
            <p>Total Raised</p>
          </div>
        </div>
      </div>
      <div className="text-u">
        <h1 className="solution" data-aos="fade-up" data-aos-duration="1500">
          Our Services
        </h1>
        <p className="easy" data-aos="fade-up" data-aos-duration="2000">
          We make it easy for users to use our platform, that's why we provide
          this benefit.
        </p>
      </div>
      <div className="home" data-aos="fade-right" data-aos-duration="1500">
        <div className="home-middle">
          <Lottie animationData={ser}></Lottie>
        </div>

        <div class="container">
          <div className="card-left" style={{ float: "left" }}>
            {main.slice(0, visible).map((main) => (
              <div class="card">
                <div class="card-header work2" style={{textAlign: "center"}}>{main.head}</div>
                <div style={{ display: "flex",justifyContent: "center"}}>
                <img src={main.icon} alt="icon2" style={{width:"80px"}}/>
                </div>
                <div class="card-body" style={{backgroundColor:"transparent!"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat doloribus porro, temporibus, veritatis facere quasi
                  possimus mollitia voluptate laudantium dolore quo sapiente
                  reprehenderit assumenda dolores! Distinctio rerum nostrum
                  cumque consequuntur.
                </div>
              </div>
            ))}
          </div>
          <div className="card-right" style={{ float: "right" }}>
            {items.slice(0, visible).map((item) => (
              <div class="card">
                <div class="card-header work" style={{textAlign: "center"}}>{item.head}</div>
                <div style={{ display: "flex",justifyContent: "center"}}>
                <img src={item.icon} alt="icon" style={{width:"80px"}}/>
                </div>
                <div class="card-body" style={{backgroundColor:"transparent"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat doloribus porro, temporibus, veritatis facere quasi
                  possimus mollitia voluptate laudantium dolore quo sapiente
                  reprehenderit assumenda dolores! Distinctio rerum nostrum
                  cumque consequuntur.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn">
        <button onClick={showMoreS}>Show More</button>
      </div>
    </>
  );
};

export default Section1;
