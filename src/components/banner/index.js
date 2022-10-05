import "./banner.scss";
import React from "react";
import bannerimg from "../../assets/images/anhdaidien.jpg";
import { Button, Row } from "reactstrap";
import { Col } from "reactstrap";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faCalendar,faEnvelope,faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <div className="homeBanner">
              <img src={bannerimg} className="banner_img"></img>
            </div>
          </Col>
          <Col className="textCol">
            <h4 className="titleConTent">Frontend-Developer</h4>
            <h1>Le Hoai Thuong</h1>
            <div className="infomation">
              <div className="faphoneMyself">
                <Row>
                  <Col id="colValueContact">
                    <FontAwesomeIcon icon={faPhone} className='fontContact'></FontAwesomeIcon>
                  </Col>
                  <Col >                   
                    <p>:0853908398</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="colValueContact">
                    <FontAwesomeIcon icon={faCalendar}  className='fontContact'></FontAwesomeIcon>
                  </Col>
                  <Col >                
                    <p>:18/04/2000</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="colValueContact">
                    <FontAwesomeIcon icon={faEnvelope}  className='fontContact'></FontAwesomeIcon>
                  </Col>
                  <Col >                
                    <p>:thuong123tvt@gmail.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="colValueContact">
                    <FontAwesomeIcon icon={faAddressCard}  className='fontContact'></FontAwesomeIcon>
                  </Col>
                  <Col>
                    <p>:120 street, Tan Phu ward, 9 district, Thu Duc city</p>
                  </Col>
                </Row>
              </div>
            </div>
           
            <Row>
              <Col>
                <Button className="btnSkill">Skill</Button>
              </Col>
              <Col>
                <Button className="btnDownload">Download CV</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
