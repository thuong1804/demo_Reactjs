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
import { Title } from '../title'

function Content() {
  return (
    <div className="content">
      <Title title={'About Myself'}/>

      <div className="row-content">
        <Row>
          <Col className="Copywrite">
            <FontAwesomeIcon
              icon={faPen}
              className="content_icon"
            ></FontAwesomeIcon>
            <h4>PREFACE</h4>
            <p id="text-p-Copywrite">
              As a student majoring in information technology at Thu Duc College
              of Technology, I learned and improved a lot of knowledge in the
              field of information technology, exposed to diverse programming
              languages
            </p>
          </Col>
          <Col className="Ecommerce">
            <FontAwesomeIcon
              icon={faAtom}
              className="content_icon"
            ></FontAwesomeIcon>
            <h4 className="title-skill">SKILL</h4>
            <p id="text-p-Ecommerce">
              HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACTJS.
            </p>
          </Col>
        </Row>
      </div>

      <div className="row-content-down">
        <Row>
          <Col className="Copywrite">
            <FontAwesomeIcon
              icon={faBook}
              className="content_icon"
            ></FontAwesomeIcon>
            <h4 className="title-education">BASIC HARD SKILLS</h4>
            <p id="text-p-Copywrite">
              Proficient in word, exel, powerpoint, photoshop<br></br>
              Read and understand English 7/10<br></br>
              skills in learning and using software
            </p>
          </Col>
          <Col className="Ecommerce">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="content_icon"
            ></FontAwesomeIcon>
            <h4>Education</h4>
            <p id="text-p-Ecommerce">
              Attended Tran Van Thoi middle school | 2011-2015 <br></br>
              Attended Tran Van Thoi high school | 2015-2018 <br></br>
              Attended Cao Dang Cong Nghe Thu Duc college | 2018-2022
            </p>
          </Col>
        </Row>
      </div>
      
      <Title title={'Self-Goals'}/>
    </div>
  );
}

export default Content;
