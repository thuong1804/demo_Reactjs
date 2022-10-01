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
            <div className="home-banner">
              <img src={bannerimg} className="banner_img"></img>
            </div>
          </Col>
          <Col className="text-col">
            <h4>Web Designer</h4>
            <h1>Le Hoai Thuong</h1>
            <div className="infomation">
              <div className="fa-phone-myself">
                <Row>
                  <Col id="col-value">
                    <FontAwesomeIcon icon={faPhone} className='font-desgin'></FontAwesomeIcon>
                  </Col>
                  <Col >                   
                    <p>:0853908398</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="col-value">
                    <FontAwesomeIcon icon={faCalendar}  className='font-desgin'></FontAwesomeIcon>
                  </Col>
                  <Col >                
                    <p>:18/04/2000</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="col-value">
                    <FontAwesomeIcon icon={faEnvelope}  className='font-desgin'></FontAwesomeIcon>
                  </Col>
                  <Col >                
                    <p>:thuong123tvt@gmail.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col id="col-value">
                    <FontAwesomeIcon icon={faAddressCard}  className='font-desgin'></FontAwesomeIcon>
                  </Col>
                  <Col>
                    <p>:120 street, Tan Phu ward, 9 distrit, Thu Duc city</p>
                  </Col>
                </Row>
              </div>
            </div>
           
            <Row>
              <Col>
                <Button className="btn-dowload">Skill</Button>
              </Col>
              <Col>
                <Button className="btn-contact">Contact</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
