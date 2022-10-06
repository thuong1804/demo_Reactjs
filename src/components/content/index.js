import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faBook,
  faPen,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <div className="content">
      <div className="contentTitle">
        <h2 className="textTitle">About Myself </h2>
      </div>
    
      <div className="rowContent">
       
        <Row>
          <Col className="Copywrite">
            <Row>
              <Col className="iconContent">
                <FontAwesomeIcon
                  icon={faPen}
                  className="contentIcon"
                ></FontAwesomeIcon>
              </Col>
              <Col>
                <h4>PREFACE</h4>
                <p id="textCopywrite">
                  As a student majoring in information technology at Thu Duc
                  College of Technology, I learned and improved a lot of
                  knowledge in the field of information technology, exposed to
                  diverse programming languages
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="Ecommerce">
            <Row>
              <Col className="iconContent">
                <FontAwesomeIcon
                  icon={faAtom}
                  className="contentIcon"
                ></FontAwesomeIcon>
              </Col>
              <Col>
                <h4 >SKILL</h4>
                <p >
                  HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACTJS.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="rowContentDown">
        <Row>
          <Col className="Copywrite">
            <Row>
              <Col className="iconContent">
                <FontAwesomeIcon
                  icon={faBook}
                  className="contentIcon"
                ></FontAwesomeIcon>
              </Col>
              <Col>
                <h4 >BASIC HARD SKILLS</h4>
                <p >
                  Proficient in word, exel, powerpoint, photoshop<br></br>
                  Read and understand English 7/10<br></br>
                  skills in learning and using software
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="Ecommerce">
            <Row>
              <Col className="iconContent">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="contentIcon"
                ></FontAwesomeIcon>
              </Col>
              <Col>
                <h4>Education</h4>
                <p >
                  Attended Tran Van Thoi middle school | 2011-2015 <br></br>
                  Attended Tran Van Thoi high school | 2015-2018 <br></br>
                  Attended Cao Dang Cong Nghe Thu Duc college | 2018-2022
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
   
      <div className="SelfGoals">
        <h2 className="SelfGoals-h2">Self-Goals</h2>
      </div>
    </div>
  );
}

export default Content;
