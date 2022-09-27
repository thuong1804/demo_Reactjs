import React from "react";
import { Col, Row } from "reactstrap";
import "./content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import testimonial_1 from "../../assets/images/testimonial-1.jpg";
import testimonial_2 from "../../assets/images/testimonial-2.jpg";

function Content() {
  return (
    <div className="content">
      <div className="content-title">
        <h2>What I Do </h2>
      </div>
      <div className="row-content">
        <Row>
          <Col className="Copywrite">
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <h4>Copywrite</h4>
            <p id="text-p-Copywrite">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
          <Col className="Ecommerce">
            <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
            <h4>Ecommerce</h4>
            <p id="text-p-Ecommerce">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
        </Row>
      </div>
      <div className="row-content-down">
        <Row>
          <Col className="Copywrite">
            <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon>
            <h4>Copywrite</h4>
            <p id="text-p-Copywrite">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
          <Col className="Ecommerce">
            <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
            <h4>Ecommerce</h4>
            <p id="text-p-Ecommerce">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
        </Row>
      </div>
      <div className="Testimonials">
        <h2 className="testimonials-h2">Testimonials</h2>
      </div>
      <div className="row_banner_img">
      <Row>
          <Col className="Copywrite">
            <img src={testimonial_1}></img>
            <h4>Copywrite</h4>
            <p id="text-p-Copywrite">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
          <Col className="Ecommerce">
            <img src={testimonial_2}></img>
            <h4>Ecommerce</h4>
            <p id="text-p-Ecommerce">
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacin ia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </Col>
        </Row>
        </div>
    </div>
  );
}

export default Content;
