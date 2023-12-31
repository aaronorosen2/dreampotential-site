import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import RePicture from "../../assets/RePicture.png";
import AgentStat from "../../assets/AgentStat.png";
import OnceAt from "../../assets/OnceAt.png";
import Neighbormade from "../../assets/DP-Logos-01.png";
import NoScrollDreamReader from "../../assets/NoScrollDreamReader.png";
import SanFrancisco from "../../assets/SanFrancisco.png";
import ChiropractorTech from "../../assets/ChiropractorTech.png";
// import Circles from "../../assets/Circles-01.svg";
import DP from "../../assets/DP-Logos-03.svg";
import IAMLogo from "../../assets/I-AM-Logo-04.svg";
import Viaduct from "../../assets/Viaduct-Logo-05.svg";
import CenteredModal from "../CenteredModal/CenteredModal"

import "./Select_Partners.css";

const Select_Partners = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalcontent, setModalcontent] = React.useState({
    title:'',
    discription:[],
    buttonText:'',
    videoURL:''
  });
  const [discription, setDiscription] = React.useState([]);


  const partnersClick = (title, discription,buttonText,videoURL,iframe) => {
    setModalcontent({
      title:title,
      discription:discription,
      buttonText:buttonText,
      videoURL:videoURL,
      iframe:iframe
    })
    setModalShow(true)
   // setTitle(title)
    setDiscription(discription)
  }
  return (
    <div>
      <Container>
        <Row className="mt-5 partners-title">
          <p className="select-partners-title">
            <span>SELECT PARTNERS</span>
          </p>
        </Row>

        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          modalcontent={modalcontent}
        />
        <div className="logo-section">
          <div className="col-lg-4 col-md-6 col-sm-12 partners-logo-section"
            onClick={() => partnersClick('RePicture', [`EXPLORE SCIENCE, TECHNOLOGY, ENGINEERING AND CULTURE PROJECTS GOING ON ALL AROUND THE WORLD REPICTURE`],'','https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4')}>
            <img className="logo-partners" src={RePicture} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-logo-section"
            onClick={() => partnersClick('AgentStat ',
             [`Real Estate Agent Search Engine allows home owner to find best agent to sell their house based on data.`,`Pick right Agent every time`],
             '','https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4')}>
            <img className="logo-partners" src={AgentStat} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-logo-section"
            onClick={() => partnersClick('IAM ',
            [`INTERACTIVE ACCOUNTABILITY TECHNOLOGY `,
            `Behavioral Health Science Platform`,`Digital Medication Monitoring`],'','','https://www.youtube.com/watch?v=_debXPUnJkQ'
            // 'https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4'
            )}>
            <img className="logo-partners" src={IAMLogo} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-onceAt-logo-section"
            onClick={() => partnersClick('OnceAt', [`We live in a beautiful world, surrounded by amazing people pursuing wonderful interests. OnceAt is our honest attempt to connect you with your ever changing surroundings. Create and participate in meaningful conversations. Live life in the moment as the world itself is of flickering temporary nature.`],'','')}>
            <img className="onceAt-logo" src={OnceAt} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-neighbormade-logo-section"
            onClick={() => partnersClick('Neighbormade', 
            [`For the Love of Local`,`Neighbormade is a marketplace that empowers people to start small businesses and sell their creations locally and sustainably.`,
            `Goodbye, e-commerce. Hello, we-commerce.`,`Building robust communities through positive actions.`],'','')}>
           
            <img className="logo-partners" src={Neighbormade} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-NoScroll-logo-section"
           onClick={() => partnersClick('No Scroll Dream Reader ', 
           [`Texted Comprehension AI`,`Science based to increase your stamina using latest Natural Language processing techniques.`],'',
           'https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4')}>

          
            <img className="logo-partners" src={NoScrollDreamReader} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-logo-section"
            onClick={() => partnersClick('CSR Widget', [`Add video customer support to any any website 123 CSR widget.`])}>
            <img className="logo-partners" src={Viaduct} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-dp-logo-section"
            onClick={() => partnersClick('Manifest Now', [`Spiritual Magic Visualization`,
            `7 day program`,`Manifest Now`])}>
            <img className="logo-partners" src={DP} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-SanFrancisco-logo-section"
            onClick={() => partnersClick('Action App ', [`Action App is onramp to social services, wellness and your self service Action portal.`])}>
            <img className="logo-partners" src={SanFrancisco} alt="icon" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-ChiropractorTech-logo-section1">
            {/* <img className="logo-partners" src={ChiropractorTech} alt="icon" /> */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 partners-ChiropractorTech-logo-section"
          onClick={() => partnersClick('Chiropractor Tech', 
          [`How is your body alignment?`,`Get your instant frame analysis and receive a free posture report in 60 seconds.` ],
          'Free AI Posture Report')}>
            <img className="logo-partners" src={ChiropractorTech} alt="icon" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Select_Partners;
